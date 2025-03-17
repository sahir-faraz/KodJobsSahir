"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

// Register Chart.js components
Chart.register(...registerables)

// Line Chart Component
export function LineChart({
  data,
  xAxis,
  yAxis,
  height = 300,
}: {
  data: any[]
  xAxis: string
  yAxis: string
  height?: number
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const chartRef = useRef<Chart | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Destroy existing chart
    if (chartRef.current) {
      chartRef.current.destroy()
    }

    // Create new chart
    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.map((item) => item[xAxis]),
        datasets: [
          {
            label: "Count",
            data: data.map((item) => item[yAxis]),
            borderColor: "rgb(124, 58, 237)",
            backgroundColor: "rgba(124, 58, 237, 0.1)",
            tension: 0.3,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: "rgba(0, 0, 0, 0.05)",
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
      },
    })

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy()
      }
    }
  }, [data, xAxis, yAxis])

  return (
    <div style={{ height: `${height}px` }}>
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}

// Bar Chart Component
export function BarChart({
  data,
  xAxis,
  yAxis,
  height = 300,
}: {
  data: any[]
  xAxis: string
  yAxis: string
  height?: number
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const chartRef = useRef<Chart | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Destroy existing chart
    if (chartRef.current) {
      chartRef.current.destroy()
    }

    // Create new chart
    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: data.map((item) => item[xAxis]),
        datasets: [
          {
            label: "Count",
            data: data.map((item) => item[yAxis]),
            backgroundColor: "rgba(124, 58, 237, 0.7)",
            borderRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: "rgba(0, 0, 0, 0.05)",
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
      },
    })

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy()
      }
    }
  }, [data, xAxis, yAxis])

  return (
    <div style={{ height: `${height}px` }}>
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}

// Pie Chart Component
export function PieChart({
  data,
  category,
  value,
  height = 300,
}: {
  data: any[]
  category: string
  value: string
  height?: number
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const chartRef = useRef<Chart | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Destroy existing chart
    if (chartRef.current) {
      chartRef.current.destroy()
    }

    // Create new chart
    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    // Generate colors
    const colors = [
      "rgba(124, 58, 237, 0.7)",
      "rgba(79, 70, 229, 0.7)",
      "rgba(59, 130, 246, 0.7)",
      "rgba(16, 185, 129,   58, 237, 0.7)",
      "rgba(79, 70, 229, 0.7)",
      "rgba(59, 130, 246, 0.7)",
      "rgba(16, 185, 129, 0.7)",
      "rgba(245, 158, 11, 0.7)",
    ]

    chartRef.current = new Chart(ctx, {
      type: "pie",
      data: {
        labels: data.map((item) => item[category]),
        datasets: [
          {
            data: data.map((item) => item[value]),
            backgroundColor: colors.slice(0, data.length),
            borderWidth: 1,
            borderColor: "#fff",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "right",
          },
        },
      },
    })

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy()
      }
    }
  }, [data, category, value])

  return (
    <div style={{ height: `${height}px` }}>
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}

// Donut Chart Component
export function DonutChart({
  data,
  category,
  value,
  height = 300,
}: {
  data: any[]
  category: string
  value: string
  height?: number
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const chartRef = useRef<Chart | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Destroy existing chart
    if (chartRef.current) {
      chartRef.current.destroy()
    }

    // Create new chart
    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    // Generate colors
    const colors = [
      "rgba(124, 58, 237, 0.7)",
      "rgba(79, 70, 229, 0.7)",
      "rgba(59, 130, 246, 0.7)",
      "rgba(16, 185, 129, 0.7)",
      "rgba(245, 158, 11, 0.7)",
    ]

    chartRef.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: data.map((item) => item[category]),
        datasets: [
          {
            data: data.map((item) => item[value]),
            backgroundColor: colors.slice(0, data.length),
            borderWidth: 1,
            borderColor: "#fff",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "60%",
        plugins: {
          legend: {
            position: "right",
          },
        },
      },
    })

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy()
      }
    }
  }, [data, category, value])

  return (
    <div style={{ height: `${height}px` }}>
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}

