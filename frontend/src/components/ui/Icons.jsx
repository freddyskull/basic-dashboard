import { icons } from 'lucide-react';

export const Icons = ({ name, color, size }) => {
  const LucideIcon = icons[name];
  return <LucideIcon color={color} size={size} />
}
