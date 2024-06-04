import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

export const StatsData = [
  {
    id: "9c342d5f-1719-4108-9e7d-4aa838e295bc",
    label: "Total Revenue",
    icon: DollarSign,
    labelTotal: "$45,231.89",
    labelIncrease: "+20.1% from last month",
  },
  {
    id: "9c34341f-c39e-4024-92ed-db395623cae1",
    label: "Subscriptions",
    icon: Users,
    labelTotal: "+2350",
    labelIncrease: "+180.1% from last month",
  },
  {
    id: "9c34344a-f71b-47c4-bc02-415300f9be2a",
    label: "Sales",
    icon: CreditCard,
    labelTotal: "+12,234",
    labelIncrease: "+19% from last month",
  },
  {
    id: "9c343459-354c-479e-bb36-557af81c3d68",
    label: "Active Now",
    icon: Activity,
    labelTotal: "+573",
    labelIncrease: "+201 since last hour",
  },
];
