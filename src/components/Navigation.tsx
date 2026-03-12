import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from './ui/navigation-menu';

const { BASE_URL } = import.meta.env;

type NavigationProps = {
  pathname: string;
};

const Navigation = ({ pathname }: NavigationProps) => {
  const links = [
    {
      href: BASE_URL,
      label: 'Home',
    },
    {
      href: `${BASE_URL}about`,
      label: 'About',
    },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-8">
        {links.map((link) => (
          <NavigationMenuItem key={link.href}>
            <NavigationMenuLink asChild data-active={pathname === link.href}>
              <a href={link.href}>{link.label}</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
