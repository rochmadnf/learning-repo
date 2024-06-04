import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { icons } from "lucide-react";

interface StatsCardProps {
  label: string;
  labelTotal: string;
  labelIncrease: string;
  Icon: React.ElementType;
}

export default function StatsCard({
  label,
  Icon,
  labelTotal,
  labelIncrease,
}: StatsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{label}</CardTitle>
        <Icon className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{labelTotal}</div>
        <p className="text-xs text-muted-foreground">{labelIncrease}</p>
      </CardContent>
    </Card>
  );
}
