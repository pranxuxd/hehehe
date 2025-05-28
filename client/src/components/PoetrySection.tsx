export default function PoetrySection() {
  const poems = [
    {
      id: 1,
      title: "My Dumb Girl 💕",
      content: `Have you ever seen a dumb girl?
I have seen one, when I sleep
and in the real life too
she's a girl whom I want to pull cheeks of
she's the girl she calls her silly
she's the girl I smile thinking
she's the girl who just keeps on talking
and I love listening to her
she's a girl who's short and cute
she's a cutie whose nose is pink
when she feels shy in my dreams
I imagine her in a sari holding my arm
if I had control on time I would stop the time
come to you and never turn on the time back
hey lemme take a diary and write you
even draw you
I want my sketchbook full of your art
I want my phone filled with your pics
I want you my dumb girl,
I want my whole life with you
never stop talking, but if I talk more
then take your finger and say shhhh
I will not speak anything
she gives me feeling of my real wife
tho she is
I will cook for her everything
even tho we will together cook food
but I wanna eat through your hands
she's like the girl I listened in ik kudi
thodi nakchadi but cute
thodi yapper but tho more cute
and I want to click like unlimited pic with you
will I scroll never gets finished
I wanna hold your hands
I wanna touch her hairs
I wanna take her fragrance better than any flower
I wanna hug you and never let you go
I don't care who left you
but now cutie I have tied you
wanna get tied to me forever? like this
both dumb? 💖`
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
        
        <div className="max-w-4xl mx-auto">
          {poems.map((poem) => (
            <div 
              key={poem.id} 
              className="bg-white bg-opacity-90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-4 border-baby-pink relative overflow-hidden"
            >
              {/* Cute corner decorations */}
              <div className="absolute top-4 right-4 text-3xl opacity-60">🎀</div>
              <div className="absolute top-4 left-4 text-3xl opacity-60">🐱</div>
              <div className="absolute bottom-4 left-4 text-2xl opacity-50">🐾</div>
              <div className="absolute bottom-4 right-4 text-2xl opacity-50">💕</div>
              
              <h3 className="font-cormorant text-3xl md:text-4xl mb-8 text-deep-lavender text-center">
                {poem.title}
              </h3>
              <div className="relative">
                <div className="absolute -left-6 top-0 text-6xl text-baby-pink opacity-30">"</div>
                <p className="font-dancing text-xl md:text-2xl leading-relaxed text-muted-gray whitespace-pre-line pl-8 pr-8 text-center">
                  {poem.content}
                </p>
                <div className="absolute -right-6 bottom-0 text-6xl text-baby-pink opacity-30 transform rotate-180">"</div>
              </div>
              
              {/* Cute bottom decoration */}
              <div className="flex justify-center mt-8 space-x-3">
                <span className="text-2xl opacity-60">💖</span>
                <span className="text-2xl opacity-60">🐱</span>
                <span className="text-2xl opacity-60">💕</span>
                <span className="text-2xl opacity-60">😸</span>
                <span className="text-2xl opacity-60">💖</span>
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