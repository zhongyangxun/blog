import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | null;

const ModeToggle = () => {
  const [theme, setTheme] = useState<Theme>(null);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    console.log('isDark', isDark);
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    const docClassList = document.documentElement.classList;
    if (theme === 'dark' && !docClassList.contains('dark')) {
      docClassList.add('dark');
    } else if (theme === 'light' && docClassList.contains('dark')) {
      docClassList.remove('dark');
    }
  }, [theme]);

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button onClick={handleClick}>
      <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    </Button>
  );
};

export default ModeToggle;
