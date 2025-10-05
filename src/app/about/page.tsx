
import Image from 'next/image';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, HandHeart, Sparkles, Users } from 'lucide-react';
import Link from 'next/link';
import { NailIcon } from '@/components/shared/logo';

const values = [
    {
        icon: Award,
        title: "Uncompromising Quality",
        description: "We partner with only the most talented and licensed nail artists who use premium products to ensure a flawless, long-lasting finish every time."
    },
    {
        icon: HandHeart,
        title: "Convenience & Comfort",
        description: "Your time is precious. We bring the complete salon experience to your home, office, or hotel, on your schedule."
    },
    {
        icon: Users,
        title: "Empowering Professionals",
        description: "We're committed to creating a supportive platform for nail technicians to build their own businesses, control their schedules, and maximize their earnings."
    },
    {
        icon: Sparkles,
        title: "Safety & Trust",
        description: "Your safety is our top priority. We vet all technicians and run background checks for house calls to ensure a secure and comfortable experience for everyone."
    },
]

const logoDataUri = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAADAFBMVEXXGBrgACDXGBrgACDXGBrgACDXGBrgACDXGBrgACDXGBrgACDXGBroZmb++Pj76+vtbm7cISHjQE والدYWF88PDjRETjQEDmRETdGRn87u798fH+/v7tcnLpHh7vgoL40NDsZmbfLCzuior3yMj87+/mS0v99vbzra3pamp+fn7lPz/88PD++fn76en64uLzsbHwjo7ucnL65ubiamrfHBz4zc3wbW3ucHD52dn2xcXnU1Ptb2/ydnb63t70u7vznJzhMTHeJibfKSn1vb3zhYXkdnb1xMTRBwfxmZnldXXpZGTbExP2ycnldHTQS0vWRkbURUXTRUXSQ0PPOjrNOzvMPz/OYWHMc3PMeXnLg4PLiorLioq9h4e9jo6+kZGtgnqvg3qehHGVfHOJeh2QeRyLcRmLbRmJahn62NjpXV3lSUnlRUXXODjXOjrYOzvXQUHXQEDWPz/OYmLYZWWygoKYiIiZh4eYiYmWjIyVj4+Uj4+VlJSWlpaYmJieoaGipKSkpqamp6enqKioqqqqq6urrKysra2trq6ur6+vsLCwsbGxsrKys7OztLS0t7e3ubm5urq6u7u7vLy8vb29vr6+v7+/wMDAw8PDxMTExsbGx8fHyMjIycnJysrKy8vLzMzMzc3Nzs7O0NDQ0dHR0tLS1dXV1tbW19fX2NjY2dnZ2tra29vb3Nzc3t7e4eHh4uLi4+Pj5OTk5eXl5ubm5+fn6enp6urq6+vr7Ozs7u7u7+/v8PDw8fHx8vLy8/Pz9PT09fX19vb29/f3+Pj4+fn5+vr6+/v7/Pz8/f39/v7+///////8///7///6///5///4///3///2///1///z///y///x///w///v///u///t///s///r///q///p///o///n///m///l///k///j///i///h///g///f///e///d///c///b///a///Z///Y///X///W///V///U///T///S///R///Q///P///O///N///M///L///K///J///I///H///G///F///E///D///C///B///A//9380SAAAAABnRSTlP//////////////////////////////wCg3w8/AAABHklEQVR42u3cR2oCMRhAYYmIiIjd27v/q+06FhZ2Lp0D8iF3vC14PAwB9w8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJj5M5zSjH1W2L7ztK3/D+90bTqWpW637TddC+1b2/9/3bC9b+v/tzV8Z1T3/Xe8rP9p/W/7S/vV+r/S/9T/tf6v/a/9AOC/4W8gW3+e/gC8/gb+NfL1h/FfINt/nf4FsPW/4W+Rrf+OfwHa/jf8bWSz/h/o9t/w/89t/d/z19/1//W337s9b/4eAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAT98A3Y6Y+mNOLAAAAABJRU5ErkJggg==";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative w-full py-20 md:py-32 lg:py-40 bg-secondary/50 text-center">
                     <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-3xl mx-auto">
                            <Image
                                src={logoDataUri}
                                alt="Beauty on the Go Logo"
                                width={200}
                                height={200}
                                className="mx-auto mb-8 rounded-2xl"
                            />
                            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
                                The Art of Beauty, Redefined.
                            </h1>
                            <p className="mt-6 text-lg text-muted-foreground">
                                We're bringing luxury, convenience, and empowerment to the forefront of the beauty industry.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Story Section */}
                <section id="story" className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="prose lg:prose-lg max-w-2xl mx-auto text-muted-foreground">
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline mb-6 text-center">Our Story</h2>
                            <p>
                                Beauty on the Go was born from a simple realization: in our fast-paced world, finding time for self-care is a challenge. Our founder, a busy professional with a passion for staying fashionable and feeling her best, often struggled to fit beauty appointments into her packed schedule. She dreamt of a service that didn't force a choice between a demanding career and personal pampering.
                            </p>
                            <p>
                                It all started with a simple question: "Why couldn't the luxury and expertise of a high-end salon come to you?" This spark grew into a vision for a comprehensive beauty platform.
                            </p>
                            <p>
                                We're launching with our first love—exquisite nail care—and will soon expand to include talented makeup and hair artists. From this vision, Beauty on the Go was created: a seamless, safe, and sophisticated solution for modern beauty, empowering artists and delivering five-star treatment to your door.
                            </p>
                        </div>
                    </div>
                </section>

                 {/* Our Values Section */}
                <section id="values" className="py-16 sm:py-24 bg-secondary/50">
                    <div className="container mx-auto px-4 md:px-6">
                         <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Our Core Values</h2>
                            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">These principles guide everything we do, from the technicians we partner with to the experience we provide.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                            {values.map((value, index) => (
                                <div key={index} className="bg-card p-8 rounded-xl shadow-md flex flex-col">
                                    <div className="mb-4">
                                        <value.icon className="h-12 w-12 text-primary mx-auto" />
                                    </div>
                                    <h3 className="text-xl font-bold font-headline mb-2">{value.title}</h3>
                                    <p className="text-muted-foreground flex-grow">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="bg-primary/10 rounded-xl p-12 text-center">
                             <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary-foreground">Ready to Experience the Difference?</h2>
                             <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">Whether you're looking for the perfect manicure or the perfect career, your journey starts here.</p>
                             <div className="mt-8 flex justify-center gap-4">
                                 <Button asChild size="lg" variant="accent">
                                     <Link href="/apply">Join Our Team</Link>
                                 </Button>
                             </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
