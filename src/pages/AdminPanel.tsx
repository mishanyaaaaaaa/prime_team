import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Visit = {
  source: string;
  date: string;
  path: string;
};

export default function AdminPanel() {
  const [visits, setVisits] = useState<Visit[]>([]);
  const [stats, setStats] = useState<{source: string; count: number}[]>([]);

  useEffect(() => {
    const loadData = () => {
      const data = JSON.parse(localStorage.getItem('trafficData') || '[]');
      setVisits(data);
      
      // Считаем статистику
      const sources: Record<string, number> = {};
      data.forEach((visit: Visit) => {
        sources[visit.source] = (sources[visit.source] || 0) + 1;
      });
      
      setStats(
        Object.entries(sources)
          .map(([source, count]) => ({ source, count }))
          .sort((a, b) => b.count - a.count)
      );
    };

    loadData();
    const interval = setInterval(loadData, 5000); // Обновление каждые 5 сек

    return () => clearInterval(interval);
  }, []);

  const totalVisits = visits.length;
  const clearData = () => {
    if (confirm("Вы уверены, что хотите полностью очистить статистику?")) {
      localStorage.setItem('trafficData', '[]');
      setVisits([]);
      setStats([]);
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Статистика трафика</h1>
        <Button 
          variant="destructive"
          onClick={clearData}
        >
          Очистить все данные
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Источники трафика</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {stats.map((item) => (
            <div key={item.source}>
              <div className="flex justify-between mb-1">
                <span className="capitalize font-medium">{item.source}</span>
                <span>{item.count} ({Math.round((item.count / totalVisits) * 100)}%)</span>
              </div>
              <Progress value={(item.count / totalVisits) * 100} />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Последние посещения ({visits.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {visits.slice().reverse().map((visit, i) => (
              <div key={i} className="border-b pb-2">
                <div className="flex justify-between">
                  <span className="capitalize font-medium">{visit.source}</span>
                  <span className="text-sm text-gray-500">
                    {new Date(visit.date).toLocaleString()}
                  </span>
                </div>
                <div className="text-sm text-gray-500">{visit.path}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}