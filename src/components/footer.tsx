import { styles } from "../styles";
import { cn } from "../utils/lib";

// Footer
const Footer = () => {
  return (
    <nav
      className={cn(
        styles.paddingX,
        "w-full flex items-center py-8 bg-primary border-t border-t-secondary/5"
      )}
    >
      <div className="w-full flex justify-center items-center max-w-7xl mx-auto">
        <p className="text-white text-md font-bold flex">
          &copy; Oleksii {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </nav>
  );
};

export default Footer;
