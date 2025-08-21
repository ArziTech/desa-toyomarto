import { Menu} from "lucide-react";
import Image from 'next/image'
import logo from '../../../public/logo_desa_white.svg'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface NavbarProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];

}

const Navbar = ({
                   menu = [
                     { title: "Home", url: "/" },
                     // {
                     //   title: "Resources",
                     //   url: "#",
                     //   items: [
                     //     {
                     //       title: "Help Center",
                     //       description: "Get all the answers you need right here",
                     //       icon: <Zap className="size-5 shrink-0" />,
                     //       url: "#",
                     //     },
                     //     {
                     //       title: "Contact Us",
                     //       description: "We are here to help you with any questions you have",
                     //       icon: <Sunset className="size-5 shrink-0" />,
                     //       url: "#",
                     //     },
                     //     {
                     //       title: "Status",
                     //       description: "Check the current status of our services and APIs",
                     //       icon: <Trees className="size-5 shrink-0" />,
                     //       url: "#",
                     //     },
                     //     {
                     //       title: "Terms of Service",
                     //       description: "Our terms and conditions for using our services",
                     //       icon: <Book className="size-5 shrink-0" />,
                     //       url: "#",
                     //     },
                     //   ],
                     // },
                     {
                       title: "Profile",
                       url: "/profile",
                     },
                     {
                       title: "Services",
                       url: "/services",
                     },
                     {
                       title: "Articles",
                       url: "/articles",
                     },
                     {
                       title: "About",
                       url: "/about",
                     },
                   ],
                 }: NavbarProps) => {
  return (
      <section className="z-50 py-4 fixed w-full bg-black/40 backdrop-blur">
        <div className="container mx-auto">
          {/* Desktop Menu */}
          <nav className="hidden justify-between lg:flex">
            <div className="flex items-center gap-6">
              {/* Logo */}
              <Link href={'/'} className="flex items-center gap-2">
                <Image
                    src={logo}
                    className="max-h-16 dark:invert"
                    alt={'logo desa wisata toyomarto'}
                />
              </Link>
            </div>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div className="block lg:hidden">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href={'/'} className="flex items-center gap-2">
                <Image
                    src={logo}
                    className="max-h-16 dark:invert"
                    alt={'logo desa wisata toyomarto'}
                />
              </Link>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>
                      <Link href={'/'} className="flex items-center gap-2">
                        <Image
                            src={logo}
                            className="max-h-16 dark:invert"
                            alt={'logo desa wisata toyomarto'}
                        />
                      </Link>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-6 p-4">
                    <Accordion
                        type="single"
                        collapsible
                        className="flex w-full flex-col gap-4"
                    >
                      {menu.map((item) => renderMobileMenuItem(item))}
                    </Accordion>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
        <NavigationMenuItem key={item.title}>
          <NavigationMenuTrigger className={'!bg-white/0 text-white'}>{item.title}</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-popover text-popover-foreground">
            {item.items.map((subItem) => (
                <NavigationMenuLink asChild key={subItem.title} className="w-80">
                  <SubMenuLink item={subItem} />
                </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
    );
  }

  return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuLink
            href={item.url}
            className="bg-background/0 text-white hover:bg-accent hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
        >
          {item.title}
        </NavigationMenuLink>
      </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
        <AccordionItem key={item.title} value={item.title} className="border-b-0">
          <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="mt-2">
            {item.items.map((subItem) => (
                <SubMenuLink key={subItem.title} item={subItem} />
            ))}
          </AccordionContent>
        </AccordionItem>
    );
  }

  return (
      <a key={item.title} href={item.url} className="text-md font-semibold">
        {item.title}
      </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
      <a
          className="hover:bg-muted hover:text-accent-foreground flex select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors"
          href={item.url}
      >
        <div className="text-foreground">{item.icon}</div>
        <div>
          <div className="text-sm font-semibold">{item.title}</div>
          {item.description && (
              <p className="text-muted-foreground text-sm leading-snug">
                {item.description}
              </p>
          )}
        </div>
      </a>
  );
};

export { Navbar };
