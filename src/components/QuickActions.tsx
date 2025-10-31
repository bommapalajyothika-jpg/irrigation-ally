import { Droplet, Cloud, Sprout, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuickActionsProps {
  onSelect: (question: string) => void;
  disabled?: boolean;
}

const QuickActions = ({ onSelect, disabled }: QuickActionsProps) => {
  const actions = [
    {
      icon: Droplet,
      label: "Water-Saving Tips",
      question: "Give me water-saving tips for my farm.",
    },
    {
      icon: Cloud,
      label: "Weather-Based Advice",
      question: "Should I adjust irrigation based on today's weather?",
    },
    {
      icon: Sprout,
      label: "Crop-Specific Help",
      question: "How much water do my tomato plants need?",
    },
    {
      icon: Calendar,
      label: "Weekly Schedule",
      question: "Plan my weekly irrigation schedule.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
      {actions.map((action, index) => {
        const Icon = action.icon;
        return (
          <Button
            key={index}
            variant="outline"
            className="h-auto py-4 px-4 flex items-center gap-3 justify-start hover:bg-primary/5 hover:border-primary transition-all"
            onClick={() => onSelect(action.question)}
            disabled={disabled}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-medium text-sm">{action.label}</p>
              <p className="text-xs text-muted-foreground line-clamp-1">{action.question}</p>
            </div>
          </Button>
        );
      })}
    </div>
  );
};

export default QuickActions;
