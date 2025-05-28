import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import FirstMeet from '@/components/FirstMeet';

export default function ProposalSection() {
  const [isProposalOpen, setIsProposalOpen] = useState(false);
  const [isSignatureMode, setIsSignatureMode] = useState(false);
  const [signature, setSignature] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    location: '',
    answer: '',
    signature: ''
  });

  const handleProposalClick = () => {
    setIsProposalOpen(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSignatureSubmit = () => {
    setFormData(prev => ({ ...prev, signature }));
    setIsSignatureMode(false);
  };

  const handleFormSubmit = () => {
    // Here you would save the form data permanently
    console.log('Marriage form submitted:', formData);
    setIsProposalOpen(false);
    // Show success message or redirect
  };

  return (
    <section id="proposal" className="py-20 bg-gradient-to-br from-hello-kitty-pink via-baby-pink to-lavender-light relative overflow-hidden">
      {/* Cute floating decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl animate-bounce opacity-20">💍</div>
        <div className="absolute top-20 right-20 text-5xl animate-pulse opacity-30">💖</div>
        <div className="absolute bottom-20 left-20 text-6xl animate-bounce delay-1000 opacity-20">👰</div>
        <div className="absolute bottom-10 right-10 text-5xl animate-pulse delay-500 opacity-30">🤵</div>
        <div className="absolute top-1/2 left-5 text-4xl animate-bounce delay-300 opacity-25">💕</div>
        <div className="absolute top-1/3 right-5 text-4xl animate-pulse delay-700 opacity-35">✨</div>
        
        {/* Hearts floating around */}
        <div className="absolute top-32 left-1/4 text-3xl animate-pulse opacity-20">💝</div>
        <div className="absolute bottom-32 right-1/4 text-3xl animate-bounce delay-200 opacity-25">💐</div>
        <div className="absolute top-1/4 right-1/3 text-2xl animate-pulse delay-1000 opacity-20">🌹</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Use the FirstMeet component instead of the chat memories section */}
        <FirstMeet />

        {/* Proposal Box */}
        <div className="max-w-3xl mx-auto"></div>
      </div>
          <div 
            className="bg-white bg-opacity-95 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border-4 border-hello-kitty-pink relative overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
            onClick={handleProposalClick}
          >
            {/* Cute corner decorations */}
            <div className="absolute top-4 right-4 text-4xl opacity-60 animate-bounce">💍</div>
            <div className="absolute top-4 left-4 text-4xl opacity-60 animate-pulse">👰</div>
            <div className="absolute bottom-4 left-4 text-3xl opacity-50 animate-bounce delay-300">🤵</div>
            <div className="absolute bottom-4 right-4 text-3xl opacity-50 animate-pulse delay-700">💕</div>
            
            <div className="text-center">
              <h3 className="font-cormorant text-4xl md:text-6xl mb-8 text-deep-lavender">
                My Dumb Girl... 💖
              </h3>
              <p className="font-dancing text-3xl md:text-4xl mb-8 text-hello-kitty-pink leading-relaxed">
                Will You Marry Me? 💍
              </p>
              <div className="bg-gradient-to-r from-baby-pink to-lavender p-6 rounded-full inline-block">
                <p className="font-lato text-xl md:text-2xl text-deep-lavender font-bold">
                  Click Here If Yes! 👆✨
                </p>
              </div>
            </div>
            
            {/* Cute decorations around the text */}
            <div className="flex justify-center mt-8 space-x-4">
              <span className="text-3xl opacity-60 animate-bounce">💖</span>
              <span className="text-3xl opacity-60 animate-pulse delay-200">🐱</span>
              <span className="text-3xl opacity-60 animate-bounce delay-400">💕</span>
              <span className="text-3xl opacity-60 animate-pulse delay-600">😸</span>
              <span className="text-3xl opacity-60 animate-bounce delay-800">💖</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marriage Proposal Form Modal */}
      <Dialog open={isProposalOpen} onOpenChange={setIsProposalOpen}>
        <DialogContent className="max-w-2xl bg-gradient-to-br from-baby-pink-light to-lavender-light border-4 border-hello-kitty-pink">
          <DialogHeader>
            <DialogTitle className="font-cormorant text-3xl text-deep-lavender text-center mb-4">
              💍 Marriage Proposal Form 💍
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 p-6">
            <div className="text-center mb-6">
              <p className="font-dancing text-xl text-hello-kitty-pink">
                Fill this form to make it official, my love! 💕
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-deep-lavender font-semibold">Your Beautiful Name 🌸</Label>
                <Input 
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="border-2 border-baby-pink rounded-full"
                  placeholder="Avani..."
                />
              </div>
              
              <div>
                <Label htmlFor="date" className="text-deep-lavender font-semibold">Today's Date 📅</Label>
                <Input 
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  className="border-2 border-baby-pink rounded-full"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="location" className="text-deep-lavender font-semibold">Where We Are 📍</Label>
              <Input 
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="border-2 border-baby-pink rounded-full"
                placeholder="Our special place..."
              />
            </div>

            <div>
              <Label htmlFor="answer" className="text-deep-lavender font-semibold">Your Answer 💖</Label>
              <select 
                className="w-full p-3 border-2 border-baby-pink rounded-full bg-white"
                value={formData.answer}
                onChange={(e) => handleInputChange('answer', e.target.value)}
              >
                <option value="">Choose your answer...</option>
                <option value="YES! Forever and always! 💕">YES! Forever and always! 💕</option>
                <option value="Of course, my love! 💍">Of course, my love! 💍</option>
                <option value="Yes, let's be dumb together! 😸">Yes, let's be dumb together! 😸</option>
              </select>
            </div>

            {/* Signature Section */}
            <div>
              <Label className="text-deep-lavender font-semibold">Your Signature ✍️</Label>
              {!isSignatureMode ? (
                <div className="flex items-center space-x-4">
                  {formData.signature ? (
                    <div className="flex-1 p-3 border-2 border-baby-pink rounded-full bg-white">
                      <span className="text-deep-lavender font-dancing text-xl">{formData.signature}</span>
                    </div>
                  ) : (
                    <div className="flex-1 p-3 border-2 border-baby-pink rounded-full bg-gray-50">
                      <span className="text-gray-400">Click to sign...</span>
                    </div>
                  )}
                  <Button 
                    onClick={() => setIsSignatureMode(true)}
                    className="bg-hello-kitty-pink hover:bg-baby-pink text-white rounded-full"
                  >
                    ✍️ Sign Here
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <Input 
                    value={signature}
                    onChange={(e) => setSignature(e.target.value)}
                    className="border-2 border-hello-kitty-pink rounded-full font-dancing text-xl"
                    placeholder="Write your signature here..."
                  />
                  <div className="flex space-x-2">
                    <Button 
                      onClick={handleSignatureSubmit}
                      className="bg-hello-kitty-pink hover:bg-baby-pink text-white rounded-full"
                    >
                      ✅ Save Signature
                    </Button>
                    <Button 
                      onClick={() => setIsSignatureMode(false)}
                      variant="outline"
                      className="border-baby-pink text-deep-lavender rounded-full"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-center space-x-4 mt-8">
              <Button 
                onClick={handleFormSubmit}
                disabled={!formData.name || !formData.date || !formData.answer || !formData.signature}
                className="bg-hello-kitty-pink hover:bg-baby-pink text-white rounded-full text-lg px-8 py-3"
              >
                💍 Submit Forever! 💕
              </Button>
              <Button 
                onClick={() => setIsProposalOpen(false)}
                variant="outline"
                className="border-baby-pink text-deep-lavender rounded-full text-lg px-8 py-3"
              >
                Maybe Later 😸
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}