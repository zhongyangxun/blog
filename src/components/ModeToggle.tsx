import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';

// 主题的读取、保存和往返缓存恢复都在 BaseLayout 的内联脚本里。
// 这里只切换 class，图标样式跟着 .dark 走。
const ModeToggle = () => {
  const handleClick = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Button
      variant="ghost"
      className="text-foreground/80"
      onClick={handleClick}
    >
      <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    </Button>
  );
};

export default ModeToggle;
