"use client";
import { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  PieChart, 
  BarChart3,
  Calendar,
  Percent,
  Calculator,
  Building2,
  ArrowUpRight,
  ArrowDownRight,
  FileText
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart as RePieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';

// Sample data for acquired assets
const assets = [
  {
    id: 1,
    name: "Residencial Ariribá",
    type: "Incorporado",
    costPrice: 1803974,
    contribution: 360794.80,
    downPayment: 180397.40,
    reinforcements: 180397.40,
    paidAmount: 360794.80,
    remainingBalance: 1443179.20,
    interest: 12.5,
    installments: 60,
    correction: "IPCA",
    monthlyReturn: 1.2,
    currentPrice: 2100000,
    roi: 16.4,
    currentIRR: 14.2,
    projectedIRR: 18.5,
    irpj: 15,
    structure: "SPE"
  },
  {
    id: 2,
    name: "Modern Apartment",
    type: "SCP",
    costPrice: 850000,
    contribution: 170000,
    downPayment: 85000,
    reinforcements: 85000,
    paidAmount: 170000,
    remainingBalance: 680000,
    interest: 10.8,
    installments: 48,
    correction: "IGP-M",
    monthlyReturn: 1.5,
    currentPrice: 950000,
    roi: 11.8,
    currentIRR: 12.5,
    projectedIRR: 15.2,
    irpj: 15,
    structure: "SCP"
  }
];

// Market indices data
const marketData = [
  { name: 'Jan', ibovespa: 115000, cdi: 13.75, selic: 13.75, vivaZap: 152.3 },
  { name: 'Fev', ibovespa: 118000, cdi: 13.75, selic: 13.75, vivaZap: 155.1 },
  { name: 'Mar', ibovespa: 122000, cdi: 13.65, selic: 13.65, vivaZap: 158.7 },
  { name: 'Abr', ibovespa: 119000, cdi: 13.65, selic: 13.65, vivaZap: 156.2 },
  { name: 'Mai', ibovespa: 125000, cdi: 13.50, selic: 13.50, vivaZap: 162.4 },
  { name: 'Jun', ibovespa: 128000, cdi: 13.50, selic: 13.50, vivaZap: 165.8 },
];

// Portfolio composition
const portfolioData = [
  { name: 'Incorporado', value: 45, color: '#000000' },
  { name: 'SCP', value: 30, color: '#6b7280' },
  { name: 'SPE', value: 25, color: '#9ca3af' },
];

// ROI Comparison
const roiData = assets.map(asset => ({
  name: asset.name,
  roi: asset.roi,
  currentIRR: asset.currentIRR,
  projectedIRR: asset.projectedIRR
}));

// Accumulated investment over time
const accumulatedData = [
  { month: 'Jan', invested: 360000, value: 380000 },
  { month: 'Fev', invested: 390000, value: 415000 },
  { month: 'Mar', invested: 420000, value: 455000 },
  { month: 'Abr', invested: 450000, value: 490000 },
  { month: 'Mai', invested: 480000, value: 530000 },
  { month: 'Jun', invested: 510000, value: 575000 },
];

const COLORS = ['#8b5cf6', '#06b6d4', '#f59e0b', '#ef4444', '#10b981'];

export default function FinanceDashboard() {
  const [selectedAsset, setSelectedAsset] = useState('consolidated');
  const [viewMode, setViewMode] = useState('yield'); // 'yield' or 'cost'

  // Calculate consolidated data
  const consolidated = {
    totalCost: assets.reduce((sum, a) => sum + a.costPrice, 0),
    totalContribution: assets.reduce((sum, a) => sum + a.contribution, 0),
    totalPaid: assets.reduce((sum, a) => sum + a.paidAmount, 0),
    totalRemaining: assets.reduce((sum, a) => sum + a.remainingBalance, 0),
    avgRoi: assets.reduce((sum, a) => sum + a.roi, 0) / assets.length,
    avgIRR: assets.reduce((sum, a) => sum + a.currentIRR, 0) / assets.length,
    totalCurrentValue: assets.reduce((sum, a) => sum + a.currentPrice, 0),
  };

  const currentAsset = selectedAsset === 'consolidated' ? null : assets.find(a => a.id.toString() === selectedAsset);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-slate-900 dark:to-purple-950 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Financial Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Complete overview of your real estate investments
        </p>
      </div>

      {/* Asset Selector */}
      <div className="mb-6 flex flex-wrap gap-3">
        <button
          onClick={() => setSelectedAsset('consolidated')}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            selectedAsset === 'consolidated'
              ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
          }`}
        >
          Consolidado
        </button>
        {assets.map(asset => (
          <button
            key={asset.id}
            onClick={() => setSelectedAsset(asset.id.toString())}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              selectedAsset === asset.id.toString()
                ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
            }`}
          >
            {asset.name}
          </button>
        ))}
      </div>

      {/* View Mode Toggle */}
      <div className="mb-6 flex gap-3">
        <button
          onClick={() => setViewMode('yield')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            viewMode === 'yield'
              ? 'bg-green-500 text-white'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
          }`}
        >
          Modo Rentabilidade
        </button>
        <button
          onClick={() => setViewMode('cost')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            viewMode === 'cost'
              ? 'bg-black dark:bg-white text-white dark:text-black'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
          }`}
        >
          Modo Custo (Yield Cost)
        </button>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-xl">
              <DollarSign className="w-6 h-6 text-gray-900 dark:text-white" />
            </div>
            <ArrowUpRight className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Preço de Custo</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {formatCurrency(selectedAsset === 'consolidated' ? consolidated.totalCost : currentAsset?.costPrice || 0)}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-xl">
              <Building2 className="w-6 h-6 text-gray-900 dark:text-white" />
            </div>
            <ArrowUpRight className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Valor Atual</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {formatCurrency(selectedAsset === 'consolidated' ? consolidated.totalCurrentValue : currentAsset?.currentPrice || 0)}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-100 dark:bg-green-900 p-3 rounded-xl">
              <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <span className="text-green-600 font-semibold">
              {selectedAsset === 'consolidated' ? consolidated.avgRoi.toFixed(1) : currentAsset?.roi || 0}%
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">ROI</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {selectedAsset === 'consolidated' ? consolidated.avgRoi.toFixed(1) : currentAsset?.roi || 0}%
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-xl">
              <Percent className="w-6 h-6 text-gray-900 dark:text-white" />
            </div>
            <span className="text-gray-900 dark:text-white font-semibold">
              {selectedAsset === 'consolidated' ? consolidated.avgIRR.toFixed(1) : currentAsset?.currentIRR || 0}% a.a
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">TIR Atual</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {selectedAsset === 'consolidated' ? consolidated.avgIRR.toFixed(1) : currentAsset?.currentIRR || 0}%
          </p>
        </div>
      </div>

      {/* Financial Details - Only for individual assets */}
      {selectedAsset !== 'consolidated' && currentAsset && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Investment Structure */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-gray-900 dark:text-white" />
              Estrutura do Investimento
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Aporte Total</span>
                <span className="font-semibold text-gray-900 dark:text-white">{formatCurrency(currentAsset.contribution)}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Entrada</span>
                <span className="font-semibold text-gray-900 dark:text-white">{formatCurrency(currentAsset.downPayment)}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Reforços</span>
                <span className="font-semibold text-gray-900 dark:text-white">{formatCurrency(currentAsset.reinforcements)}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Valores Pagos</span>
                <span className="font-semibold text-green-600">{formatCurrency(currentAsset.paidAmount)}</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-600 dark:text-gray-400">Saldo Remanescente</span>
                <span className="font-semibold text-orange-600">{formatCurrency(currentAsset.remainingBalance)}</span>
              </div>
            </div>
          </div>

          {/* Payment Details */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-gray-900 dark:text-white" />
              Detalhes do Pagamento
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Estrutura</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full font-semibold text-sm">
                  {currentAsset.structure}
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Juros</span>
                <span className="font-semibold text-gray-900 dark:text-white">{currentAsset.interest}% a.a</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Número de Parcelas</span>
                <span className="font-semibold text-gray-900 dark:text-white">{currentAsset.installments}x</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Correção</span>
                <span className="font-semibold text-gray-900 dark:text-white">{currentAsset.correction}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Rentabilidade Mensal</span>
                <span className="font-semibold text-green-600">{currentAsset.monthlyReturn}%</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">TIR Projetada</span>
                <span className="font-semibold text-gray-900 dark:text-white">{currentAsset.projectedIRR}% a.a</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-600 dark:text-gray-400">IRPJ</span>
                <span className="font-semibold text-gray-900 dark:text-white">{currentAsset.irpj}%</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* ROI & IRR Comparison */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Comparação de Rentabilidade
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={roiData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1f2937', 
                  border: 'none', 
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Legend />
              <Bar dataKey="roi" fill="#000000" name="ROI (%)" />
              <Bar dataKey="currentIRR" fill="#6b7280" name="TIR Atual (%)" />
              <Bar dataKey="projectedIRR" fill="#10b981" name="TIR Projetada (%)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Portfolio Composition */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Composição do Portfólio
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <RePieChart>
              <Pie
                data={portfolioData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(Number(percent ?? 0) * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {portfolioData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </RePieChart>
          </ResponsiveContainer>
        </div>

        {/* Accumulated Investment */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Investimento Acumulado vs Valor
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={accumulatedData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1f2937', 
                  border: 'none', 
                  borderRadius: '8px',
                  color: '#fff'
                }} 
                formatter={(value) => formatCurrency(value)}
              />
              <Legend />
              <Area type="monotone" dataKey="invested" stackId="1" stroke="#000000" fill="#000000" name="Investido" />
              <Area type="monotone" dataKey="value" stackId="2" stroke="#10b981" fill="#10b981" name="Valor Atual" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Market Indices */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Índices de Mercado (Benchmarks)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={marketData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1f2937', 
                  border: 'none', 
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Legend />
              <Line type="monotone" dataKey="cdi" stroke="#000000" strokeWidth={2} name="CDI (%)" />
              <Line type="monotone" dataKey="selic" stroke="#6b7280" strokeWidth={2} name="Selic (%)" />
              <Line type="monotone" dataKey="vivaZap" stroke="#9ca3af" strokeWidth={2} name="VivaReal/Zap" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Market Indices Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-900 dark:bg-white rounded-xl p-5 text-white dark:text-black">
          <p className="text-sm opacity-90 mb-1">Ibovespa</p>
          <p className="text-2xl font-bold">128,450</p>
          <p className="text-sm flex items-center gap-1 mt-2 text-green-500">
            <ArrowUpRight className="w-4 h-4" />
            +2.3%
          </p>
        </div>
        <div className="bg-gray-700 dark:bg-gray-300 rounded-xl p-5 text-white dark:text-black">
          <p className="text-sm opacity-90 mb-1">CDI</p>
          <p className="text-2xl font-bold">13.50%</p>
          <p className="text-sm flex items-center gap-1 mt-2 text-gray-300 dark:text-gray-700">
            <ArrowDownRight className="w-4 h-4" />
            -0.15%
          </p>
        </div>
        <div className="bg-gray-600 dark:bg-gray-400 rounded-xl p-5 text-white dark:text-black">
          <p className="text-sm opacity-90 mb-1">Selic</p>
          <p className="text-2xl font-bold">13.50%</p>
          <p className="text-sm mt-2">a.a</p>
        </div>
        <div className="bg-green-500 rounded-xl p-5 text-white">
          <p className="text-sm opacity-90 mb-1">VivaReal/Zap</p>
          <p className="text-2xl font-bold">165.8</p>
          <p className="text-sm flex items-center gap-1 mt-2">
            <ArrowUpRight className="w-4 h-4" />
            +3.2%
          </p>
        </div>
      </div>
    </div>
  );
}