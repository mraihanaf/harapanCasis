import { Instagram } from 'lucide-react';

const Ig = () => {
  return (
    <div className="w-full py-4 mt-8 mb-8 text-center">
      <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
        Made with ❤️ by 
        <a 
          href="https://instagram.com/mraihanaf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
        >
          <Instagram className="w-4 h-4" />
          @mraihanaf
        </a>
      </p>
    </div>
  );
};

export default Ig;