import { ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";

/**
 * Opens the global Yetti booking modal (see YettiBookingWidget) for a specific
 * activity. Pass activityId="" for a general inquiry until real Flagship
 * Aruba Yetti activity ids are wired up per tour.
 */
export function BookNowButton({
  activityId = "",
  label = "Book Now",
  showIcon = true,
  className,
  variant,
  size = "lg",
}: {
  activityId?: string;
  label?: string;
  showIcon?: boolean;
  className?: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
}) {
  return (
    <Button data-yetti-activity={activityId} variant={variant} size={size} className={cn("cursor-pointer", className)}>
      {label} {showIcon && <ArrowRight className="size-4" />}
    </Button>
  );
}
