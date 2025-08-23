'use client'

import {Menu} from "lucide-react";
import Image from 'next/image'
import logo from '@/public/logo_desa_white.svg'
import logoColor from '@/public/logo_desa_color.svg'

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
import {checkCurrentPathname, cn} from "@/lib/utils";
import {usePathname} from "next/navigation";
import LanguageSelector from "@/components/global/language-selector";

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
                     // {
                     //   title: "Language",
                     //   url: "#",
                     //   items: [
                     //     {
                     //       title: "Bahasa Indonesia",
                     //       icon: <span className="size-5 shrink-0" >en</span>,
                     //       url: "#",
                     //     },
                     //     {
                     //       title: "English",
                     //       icon: <span className="size-5 shrink-0">🇮🇩</span>,
                     //       url: "#",
                     //     },
                     //   ],
                     // },
                   ],
                 }: NavbarProps) => {
  const pathname = usePathname();
  return (
      <section className="z-50  fixed w-full bg-primary/75 backdrop-blur">
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
                  {menu.map((item) => renderMenuItem(item, pathname))}
                  <NavigationMenuItem>
                    <LanguageSelector />
                  </NavigationMenuItem>
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
                  <Button variant="outline" size="icon" className={'bg-white/0 border-0'}>
                    <Menu className="size-6 text-white"  />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>
                      <Link href={'/'} className="flex items-center gap-2">
                        <Image
                            src={logoColor}
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
                      {menu.map((item) => renderMobileMenuItem(item, pathname))}
                      <LanguageSelector className={'text-black border' +
                          ' border-border w-full'} />
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

const renderMenuItem = (item: MenuItem, currentPath: string) => {
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
            className={cn("bg-background/0 text-white hover:bg-accent" +
                " hover:text-accent-foreground group inline-flex h-10 w-max" +
                " items-center justify-center rounded-md px-4 py-2" +
                " text-sm font-medium transition-colors",  checkCurrentPathname(item.url, currentPath) && 'text-accent hover:text-white' )}
        >
          {item.title}
        </NavigationMenuLink>
      </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem, currentPath:string) => {
  if (item.items) {
    return (
        <AccordionItem key={item.title} value={item.title} className="border-b-0">
          <AccordionTrigger className={"text-md py-0 font-semibold" +
              " hover:no-underline"}>
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
      <a key={item.title} href={item.url} className={cn("text-md" +
          " font-semibold", checkCurrentPathname(item.url, currentPath) && 'text-accent')}>
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
