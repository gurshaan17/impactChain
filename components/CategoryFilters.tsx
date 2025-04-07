
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", name: "All Categories" },
  { id: "technology", name: "Technology" },
  { id: "art", name: "Art & Creative" },
  { id: "community", name: "Community" },
  { id: "education", name: "Education" },
  { id: "environment", name: "Environment" },
  { id: "health", name: "Health" },
  { id: "nonprofit", name: "Nonprofit" },
];

interface CategoryFiltersProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryFilters({ 
  selectedCategory = "all", 
  onSelectCategory 
}: CategoryFiltersProps) {
  return (
    <div className="flex overflow-x-auto pb-2 hide-scrollbar gap-2">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant="outline"
          size="sm"
          className={cn(
            "rounded-full whitespace-nowrap",
            selectedCategory === category.id && "bg-solana-purple text-white hover:bg-solana-purple/90 hover:text-white"
          )}
          onClick={() => onSelectCategory(category.id)}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
}
