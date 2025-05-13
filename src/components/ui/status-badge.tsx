import { cn } from "@/libs/cn"
import { getStatusColor } from "@/types/vehicles"

interface StatusBadgeProps {
  status: string;
  className?: string;
}

export const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const statusColor = getStatusColor(status);

  return (
    <span className={cn(statusColor, className)}>
      {status}
    </span>
  );
}; 