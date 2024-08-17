import Image from 'next/image';
import Link from 'next/link';

const WhatsAppFloatingIcon = () => {
  return (
    <div className="fixed bottom-8 right-8">
      <Link
        href="https://wa.me/+919270046811"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed whatsapp bottom-8 right-8 w-16 h-16 rounded-full bg-blue text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 transition-all duration-300"
        >
        <Image src="/whatsapp.png" alt="WhatsApp" width={70} height={70} />
      </Link>
    </div>
  );
};

export default WhatsAppFloatingIcon;
