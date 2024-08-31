import * as React from "react"

import { cn } from "@/lib/utils"
import {
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"



import { CardWithForm } from "@/components/core/newproject"
import { ProjectList } from "@/components/core/projectlist"
import { NavigationMenuComponent } from "@/components/core/navigation"



export default function NavigationMenuDemo() {
  return (
    <div className="px-20">
      <NavigationMenuComponent />

      <div className="flex justify-evenly">
        <div className="">
          <ProjectList />
        </div>
        <div className="m-5">
          <CardWithForm />
        </div>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
