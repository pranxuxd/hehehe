import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Heart } from 'lucide-react';
import { BirthdayCakeIcon } from '@/assets/icons/BirthdayCakeIcon';
import { BalloonIcon } from '@/assets/icons/BalloonIcon';
import { FlowerIcon } from '@/assets/icons/FlowerIcon';
import { submitWish } from '@/lib/utils';
import { useMutation } from '@tanstack/react-query';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Please enter your name' }),
  relationship: z.string().min(1, { message: 'Please select how you know Avani' }),
  message: z.string().min(5, { message: 'Please write a birthday message' }),
  gift: z.enum(['flowers', 'cake', 'balloon', 'heart'], { required_error: 'Please select a gift' })
});

type FormData = z.infer<typeof formSchema>;

export default function WishesForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      relationship: '',
      message: '',
      gift: 'heart'
    }
  });

  const wishMutation = useMutation({
    mutationFn: submitWish,
    onSuccess: () => {
      toast({
        title: 'Birthday wish sent!',
        description: 'Your message has been delivered to Avani.',
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: () => {
      toast({
        title: 'Failed to send wish',
        description: 'Please try again later.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
    }
  });

  function onSubmit(data: FormData) {
    setIsSubmitting(true);
    wishMutation.mutate(data);
  }

  return (
    <section id="wishes" className="py-20 bg-lavender bg-opacity-30">
      <div className="container mx-auto px-4">
        <h2 className="font-cormorant text-3xl md:text-4xl mb-2 text-muted-gray text-center">Send Birthday Wishes</h2>
        <p className="font-dancing text-xl text-rose-gold mb-12 text-center">Let Avani know you're thinking of her</p>
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block font-cormorant text-lg text-muted-gray mb-2">Your Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your name" 
                        {...field} 
                        className="w-full p-3 border border-lavender rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-gold"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="relationship"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block font-cormorant text-lg text-muted-gray mb-2">How do you know Avani?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full p-3 border border-lavender rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-gold">
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="family">Family</SelectItem>
                        <SelectItem value="friend">Friend</SelectItem>
                        <SelectItem value="colleague">Colleague</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block font-cormorant text-lg text-muted-gray mb-2">Your Birthday Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Write your message here..." 
                        {...field} 
                        className="w-full p-3 border border-lavender rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-gold"
                        rows={4}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="gift"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="block font-cormorant text-lg text-muted-gray mb-2">Select a virtual gift</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4"
                      >
                        <FormItem className="cursor-pointer">
                          <FormControl>
                            <RadioGroupItem value="flowers" id="flowers" className="sr-only" />
                          </FormControl>
                          <FormLabel htmlFor="flowers" className={`border-2 ${field.value === 'flowers' ? 'border-rose-gold bg-soft-pink bg-opacity-20' : 'border-transparent'} hover:border-rose-gold rounded-lg p-3 text-center transition-colors duration-300 block`}>
                            <div className="flex justify-center">
                              <FlowerIcon className="text-rose-gold text-2xl mb-2 h-6 w-6" />
                            </div>
                            <span className="block text-sm">Flowers</span>
                          </FormLabel>
                        </FormItem>

                        <FormItem className="cursor-pointer">
                          <FormControl>
                            <RadioGroupItem value="cake" id="cake" className="sr-only" />
                          </FormControl>
                          <FormLabel htmlFor="cake" className={`border-2 ${field.value === 'cake' ? 'border-rose-gold bg-soft-pink bg-opacity-20' : 'border-transparent'} hover:border-rose-gold rounded-lg p-3 text-center transition-colors duration-300 block`}>
                            <div className="flex justify-center">
                              <BirthdayCakeIcon className="text-rose-gold text-2xl mb-2 h-6 w-6" />
                            </div>
                            <span className="block text-sm">Cake</span>
                          </FormLabel>
                        </FormItem>

                        <FormItem className="cursor-pointer">
                          <FormControl>
                            <RadioGroupItem value="balloon" id="balloon" className="sr-only" />
                          </FormControl>
                          <FormLabel htmlFor="balloon" className={`border-2 ${field.value === 'balloon' ? 'border-rose-gold bg-soft-pink bg-opacity-20' : 'border-transparent'} hover:border-rose-gold rounded-lg p-3 text-center transition-colors duration-300 block`}>
                            <div className="flex justify-center">
                              <BalloonIcon className="text-rose-gold text-2xl mb-2 h-6 w-6" />
                            </div>
                            <span className="block text-sm">Balloon</span>
                          </FormLabel>
                        </FormItem>

                        <FormItem className="cursor-pointer">
                          <FormControl>
                            <RadioGroupItem value="heart" id="heart" className="sr-only" />
                          </FormControl>
                          <FormLabel htmlFor="heart" className={`border-2 ${field.value === 'heart' ? 'border-rose-gold bg-soft-pink bg-opacity-20' : 'border-transparent'} hover:border-rose-gold rounded-lg p-3 text-center transition-colors duration-300 block`}>
                            <div className="flex justify-center">
                              <Heart className="text-rose-gold text-2xl mb-2 h-6 w-6" fill="currentColor" />
                            </div>
                            <span className="block text-sm">Heart</span>
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="text-center pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-rose-gold hover:bg-opacity-80 text-white rounded-full transition-colors duration-300 shadow-md"
                >
                  {isSubmitting ? 'Sending...' : 'Send Birthday Wishes'}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
