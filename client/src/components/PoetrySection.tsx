export default function PoetrySection() {
  const poems = [
    {
      id: 1,
      title: "For My Avani",
      content: `In the garden of my heart, you bloom so bright,
A rose among stars in the quiet night.
Your laughter echoes like a gentle breeze,
Your smile brings my restless heart to ease.

Every moment with you feels like a dream,
Your eyes hold a love so pure and serene.
Happy birthday to the girl who stole my heart,
You're my ending, my beginning, my perfect start.`
    },
    {
      id: 2,
      title: "Birthday Wishes",
      content: `Today the world celebrates your birth,
The day that brought you to this earth.
With every candle on your cake,
My love for you will never break.

You paint my world in colors new,
Everything's beautiful when I'm with you.
Another year of memories we'll create,
Happy birthday to my soulmate.`
    },
    {
      id: 3,
      title: "My Forever Love",
      content: `Like Hello Kitty, you're sweet and kind,
A precious treasure I'm lucky to find.
Your gentle spirit, your caring ways,
Light up even my darkest days.

On this special day that's all about you,
I promise my love will always be true.
Through every season, through every year,
You're the one I'll always hold dear.`
    }
  ];

  return (
    <section id="poetry" className="py-20 bg-gradient-to-br from-baby-pink via-lavender-light to-soft-pink relative overflow-hidden">
      {/* Cute floating decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Hello Kitty stickers */}
        <div className="absolute top-10 left-10 text-6xl animate-bounce opacity-30">🐱</div>
        <div className="absolute top-20 right-20 text-4xl animate-pulse opacity-40">🎀</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-bounce delay-1000 opacity-30">😸</div>
        <div className="absolute bottom-10 right-10 text-4xl animate-pulse delay-500 opacity-40">💕</div>
        <div className="absolute top-1/2 left-5 text-3xl animate-bounce delay-300 opacity-25">🐾</div>
        <div className="absolute top-1/3 right-5 text-3xl animate-pulse delay-700 opacity-35">✨</div>
        
        {/* Hearts floating around */}
        <div className="absolute top-32 left-1/4 text-2xl animate-pulse opacity-20">💖</div>
        <div className="absolute bottom-32 right-1/4 text-2xl animate-bounce delay-200 opacity-25">💝</div>
        <div className="absolute top-1/4 right-1/3 text-xl animate-pulse delay-1000 opacity-20">💗</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-4 text-deep-lavender">
            Love Poems for Avani 💕
          </h2>
          <p className="font-dancing text-2xl text-rose-gold">
            Words from my heart to yours, my precious kitten 🐱
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {poems.map((poem) => (
            <div 
              key={poem.id} 
              className="bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-3xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 border-4 border-baby-pink relative overflow-hidden"
            >
              {/* Cute corner decorations */}
              <div className="absolute top-2 right-2 text-2xl opacity-60">🎀</div>
              <div className="absolute bottom-2 left-2 text-xl opacity-50">🐾</div>
              
              <h3 className="font-cormorant text-2xl md:text-3xl mb-6 text-deep-lavender text-center">
                {poem.title}
              </h3>
              <div className="relative">
                <div className="absolute -left-4 top-0 text-4xl text-baby-pink opacity-30">"</div>
                <p className="font-dancing text-lg md:text-xl leading-relaxed text-muted-gray whitespace-pre-line pl-4 pr-4">
                  {poem.content}
                </p>
                <div className="absolute -right-4 bottom-0 text-4xl text-baby-pink opacity-30 transform rotate-180">"</div>
              </div>
              
              {/* Cute bottom decoration */}
              <div className="flex justify-center mt-6 space-x-2">
                <span className="text-lg opacity-60">💖</span>
                <span className="text-lg opacity-60">🐱</span>
                <span className="text-lg opacity-60">💖</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Special message */}
        <div className="mt-16 text-center">
          <div className="bg-white bg-opacity-80 backdrop-blur-sm p-8 rounded-3xl shadow-lg max-w-2xl mx-auto border-4 border-lavender-light relative">
            <div className="absolute top-2 left-2 text-2xl">🌸</div>
            <div className="absolute top-2 right-2 text-2xl">🌸</div>
            <div className="absolute bottom-2 left-2 text-2xl">🎂</div>
            <div className="absolute bottom-2 right-2 text-2xl">🎂</div>
            
            <h3 className="font-cormorant text-3xl mb-4 text-deep-lavender">
              Happy Birthday, My Sweet Avani! 🎉
            </h3>
            <p className="font-dancing text-xl text-rose-gold">
              You're as adorable as Hello Kitty and as precious as a rare gem.
              <br />
              Today and always, you're my everything! 💕🐱✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}