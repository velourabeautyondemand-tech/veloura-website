
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: 'Beauty' | 'Lifestyle' | 'Professional' | 'Trends';
  imageUrl: string;
  imageHint: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'future-of-on-demand-beauty',
    title: 'The Future of Self-Care: Why On-Demand Beauty is Here to Stay',
    excerpt: 'Discover how technology is redefining luxury and why bringing the salon to your home is the ultimate time-saver.',
    content: `
      <p>Self-care used to mean clearing an entire afternoon, fighting traffic, and hoping your appointment didn't run late. But the world has changed. In 2026, luxury is defined by convenience and control over one's time.</p>
      
      <h3>The Commute is Dead</h3>
      <p>The biggest barrier to consistent self-care has always been the logistics. VÉLOURA removes that barrier by moving the "salon" to wherever you are. Whether it's your living room, office, or hotel suite, the quality remains elite while the stress of travel disappears.</p>
      
      <h3>Personalized Excellence</h3>
      <p>In a traditional salon, technicians are often managing multiple clients at once. With VÉLOURA, you get 100% of the professional's focus. This one-on-one connection results in better outcomes, deeper relaxation, and a truly bespoke experience.</p>
      
      <p>As we continue to build the VÉLOURA community, our mission remains clear: beauty should move with your life, not against it.</p>
    `,
    author: 'Huiyu "Cherry" Cheng',
    date: '2026-04-15',
    readTime: '5 min read',
    category: 'Lifestyle',
    imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1080&auto=format&fit=crop',
    imageHint: 'luxury beauty'
  },
  {
    slug: 'preparing-your-home-for-veloura',
    title: 'How to Prepare Your Home for a VÉLOURA Appointment',
    excerpt: 'Setting the stage for a five-star experience is easy. Here is our guide to creating the perfect at-home salon environment.',
    content: `
      <p>Getting ready for a VÉLOURA professional is simple, but a few small steps can elevate your experience from "great" to "extraordinary."</p>
      
      <h3>1. Choose Your Workspace</h3>
      <p>For nails, a well-lit table near an outlet is ideal. For hair and makeup, a comfortable chair near a large mirror and natural light works best.</p>
      
      <h3>2. Clear the Area</h3>
      <p>Give your professional room to set up their toolkit. A small, clear surface is usually all they need to organize their premium products.</p>
      
      <h3>3. Set the Vibe</h3>
      <p>This is your time. Put on your favorite playlist, light a candle, or enjoy the quiet. The beauty of VÉLOURA is that the environment is entirely under your control.</p>
    `,
    author: 'Roxanne Resma',
    date: '2026-04-20',
    readTime: '4 min read',
    category: 'Beauty',
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbe91b?q=80&w=1080&auto=format&fit=crop',
    imageHint: 'home salon'
  },
  {
    slug: 'bridal-trends-2026',
    title: 'Top 5 Bridal Beauty Trends for 2026',
    excerpt: 'From high-fashion glamour to minimalist radiance, discover what is trending for the modern bride this season.',
    content: `
      <p>Bridal beauty is evolving. This year, we're seeing a shift toward "Bespoke Elegance"—looks that are as unique as the brides themselves.</p>
      
      <h3>1. The Skin-First Glow</h3>
      <p>Less "mask" and more "radiance." Brides are opting for lightweight, serum-infused foundations that let their natural skin texture shine through.</p>
      
      <h3>2. Modern Architectural Updos</h3>
      <p>Sleek, sharp lines are replacing loose boho braids. Think sculptural buns and polished ponytails that look amazing in event photography.</p>
    `,
    author: 'VÉLOURA Agency Team',
    date: '2026-05-01',
    readTime: '6 min read',
    category: 'Trends',
    imageUrl: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=1080&auto=format&fit=crop',
    imageHint: 'bridal trends'
  }
];
