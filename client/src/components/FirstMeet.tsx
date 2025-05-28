
import firstChatImg from '@/assets/images/first_chat.png';

export default function FirstMeet() {
  return (
    <section id="first-meet" className="py-20 bg-gradient-to-br from-lavender-light via-baby-pink-light to-soft-pink">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-4 text-deep-lavender">
            Our First Meet 💕
          </h2>
          <p className="font-dancing text-2xl text-rose-gold">
            The moment that started our beautiful journey 🌟
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white bg-opacity-90 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-4 border-baby-pink relative overflow-hidden">
            {/* Cute corner decorations */}
            <div className="absolute top-4 right-4 text-3xl opacity-60">💬</div>
            <div className="absolute top-4 left-4 text-3xl opacity-60">😊</div>
            <div className="absolute bottom-4 left-4 text-2xl opacity-50">💕</div>
            <div className="absolute bottom-4 right-4 text-2xl opacity-50">✨</div>
            
            <div className="text-center mb-8">
              <h3 className="font-cormorant text-2xl md:text-3xl text-deep-lavender mb-4">
                When We First Started Talking 💭
              </h3>
              <p className="font-dancing text-lg md:text-xl text-muted-gray mb-6">
                Look how our conversation began... and look where we are now! 🥰
              </p>
            </div>
            
            {/* Chat Screenshot */}
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-4 rounded-2xl shadow-lg max-w-md w-full">
                <img 
                  src={firstChatImg} 
                  alt="Our first chat conversation" 
                  className="w-full h-auto rounded-xl shadow-md"
                />
              </div>
            </div>
            
            <div className="text-center">
              <p className="font-dancing text-xl md:text-2xl text-rose-gold mb-4">
                "I CAN'T. I'M JUST WEIRD" 😂
              </p>
              <p className="font-lato text-muted-gray text-lg">
                Little did we know this was the beginning of our forever story... 💖
              </p>
            </div>
            
            {/* Cute bottom decoration */}
            <div className="flex justify-center mt-8 space-x-3">
              <span className="text-2xl opacity-60">💬</span>
              <span className="text-2xl opacity-60">💕</span>
              <span className="text-2xl opacity-60">😊</span>
              <span className="text-2xl opacity-60">✨</span>
              <span className="text-2xl opacity-60">💖</span>
            </div>
          </div>
        </div>
        
        {/* Sweet message */}
        <div className="mt-12 text-center">
          <div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-2xl shadow-lg max-w-2xl mx-auto border-2 border-lavender-light">
            <p className="font-dancing text-xl text-deep-lavender">
              From that first "hi ?" to forever... 
              <br />
              Thank you for being perfectly weird with me! 🥰💕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
