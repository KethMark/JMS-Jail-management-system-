import { Button } from "../../ui/button";
import { cn } from "../../../lib/utils";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { Column } from "@tanstack/react-table";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "../../ui/command";

interface DataTableColumnHeaderProps<TData, TValue> {
  column: Column<TData, TValue>;
  title: string;
  props: {
    label: string;
    value: string;
  }[];
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  props,
}: DataTableColumnHeaderProps<TData, TValue>) {
  const facets = column.getFacetedUniqueValues();
  const selectedValues = new Set(column.getFilterValue() as string[]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className=""
        >
          <span>{title}</span>
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[120px] p-0" align="start">
        <Command>
          <CommandList>
            <CommandGroup>
              {props.map((prop) => {
                const isSelected = selectedValues.has(prop.value);
                return (
                  <CommandItem
                    key={prop.value}
                    onSelect={() => {
                      if (isSelected) {
                        selectedValues.delete(prop.value);
                      } else {
                        selectedValues.add(prop.value);
                      }
                      const filterValues = Array.from(selectedValues);
                      column.setFilterValue(
                        filterValues.length ? filterValues : undefined
                      );
                    }}
                  >
                    <div
                      className={cn(
                        "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : "opacity-50 [&_svg]:invisible"
                      )}
                    >
                      <CheckIcon className={cn("h-4 w-4")} />
                    </div>
                    <span>{prop.label}</span>
                    {facets.get(prop.value) && (
                      <span className="ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs tabular-nums">
                        {facets.get(prop.value)}
                      </span>
                    )}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
