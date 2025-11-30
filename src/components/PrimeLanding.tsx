import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play, ArrowRight, Star, Users, Trophy, Zap, ArrowDown, ExternalLink, MessageCircle, Instagram, Music } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import FloatingElement from './FloatingElement';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const PrimeLanding = () => {
  const slides = [
    {
      id: 1,
      image: '/img/casino.jpeg',
      alt: "Казино - играй и выигрывай"
    },
    {
      id: 2,
      image: '/img/sports.jpeg',
      alt: "Ставки на спорт - Поймай удачу за хвост"
    }
  ];
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Premium Animated Background */}
      <AnimatedBackground />
      
      {/* Игровые элементы расположенные ниже */}
      <FloatingElement className="absolute top-32 right-10 md:right-20 z-10" delay={0} duration={8}>
        <div className="premium-chip w-16 md:w-20 h-16 md:h-20 rounded-full bg-gradient-to-br from-red-500 to-red-700 shadow-2xl border-4 border-white/30 backdrop-blur-sm">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-white/40 to-transparent relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 md:w-8 h-6 md:h-8 rounded-full bg-white shadow-inner"></div>
            <div className="absolute top-2 left-2 w-2 h-2 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </FloatingElement>

      <FloatingElement className="absolute top-28 left-10 md:left-20 z-10" delay={1} duration={9}>
        <div className="premium-dice w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-gray-100 to-gray-300 rounded-xl shadow-2xl border-2 border-gray-400 backdrop-blur-sm">
          <div className="w-full h-full p-2 md:p-3 flex items-center justify-center relative">
            <div className="grid grid-cols-3 gap-1">
              <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-gray-800 rounded-full"></div>
              <div className="w-1.5 md:w-2 h-1.5 md:h-2"></div>
              <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-gray-800 rounded-full"></div>
              <div className="w-1.5 md:w-2 h-1.5 md:h-2"></div>
              <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-gray-800 rounded-full"></div>
              <div className="w-1.5 md:w-2 h-1.5 md:h-2"></div>
              <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-gray-800 rounded-full"></div>
              <div className="w-1.5 md:w-2 h-1.5 md:h-2"></div>
              <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-gray-800 rounded-full"></div>
            </div>
          </div>
        </div>
      </FloatingElement>

      <FloatingElement className="absolute bottom-48 right-16 md:right-24 z-10" delay={1.5} duration={7}>
        <div className="premium-chip w-14 md:w-16 h-14 md:h-16 rounded-full bg-gradient-to-br from-green-500 to-green-700 shadow-2xl border-4 border-white/30">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-white/40 to-transparent relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 md:w-6 h-5 md:h-6 rounded-full bg-white shadow-inner"></div>
          </div>
        </div>
      </FloatingElement>

      <FloatingElement className="absolute top-44 left-1/3 z-10" delay={2} duration={10}>
        <div className="premium-chip w-12 md:w-16 h-12 md:h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 shadow-2xl border-4 border-white/30">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-white/40 to-transparent relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 md:w-6 h-4 md:h-6 rounded-full bg-white shadow-inner"></div>
          </div>
        </div>
      </FloatingElement>

      <FloatingElement className="absolute bottom-60 left-20 z-10" delay={2.5} duration={8}>
        <div className="premium-dice w-14 md:w-16 h-14 md:h-16 bg-gradient-to-br from-purple-200 to-purple-400 rounded-lg shadow-2xl border border-purple-300">
          <div className="w-full h-full p-2 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-1">
              <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-purple-800 rounded-full"></div>
              <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-purple-800 rounded-full"></div>
              <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-purple-800 rounded-full"></div>
              <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-purple-800 rounded-full"></div>
            </div>
          </div>
        </div>
      </FloatingElement>

      <FloatingElement className="absolute top-52 right-1/3 z-10" delay={3} duration={9}>
        <div className="premium-chip w-16 md:w-18 h-16 md:h-18 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 shadow-2xl border-4 border-white/30">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-white/40 to-transparent relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 md:w-7 h-6 md:h-7 rounded-full bg-white shadow-inner"></div>
            <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-white/60 rounded-full"></div>
          </div>
        </div>
      </FloatingElement>

      <FloatingElement className="absolute bottom-80 right-8 z-10" delay={3.5} duration={6}>
        <div className="premium-dice w-12 md:w-14 h-12 md:h-14 bg-gradient-to-br from-indigo-200 to-indigo-400 rounded-lg shadow-2xl border border-indigo-300">
          <div className="w-full h-full p-1.5 md:p-2 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-1">
              <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-indigo-800 rounded-full"></div>
              <div className="w-1 md:w-1.5 h-1 md:h-1.5"></div>
              <div className="w-1 md:w-1.5 h-1 md:h-1.5"></div>
              <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-indigo-800 rounded-full"></div>
            </div>
          </div>
        </div>
      </FloatingElement>

      <FloatingElement className="absolute bottom-32 left-1/4 z-10" delay={4} duration={7}>
        <div className="premium-dice w-16 md:w-18 h-16 md:h-18 bg-gradient-to-br from-pink-200 to-pink-400 rounded-xl shadow-2xl border-2 border-pink-300">
          <div className="w-full h-full p-2 md:p-3 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-1">
              <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-pink-800 rounded-full"></div>
              <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-pink-800 rounded-full"></div>
              <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-pink-800 rounded-full"></div>
              <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-pink-800 rounded-full"></div>
              <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-pink-800 rounded-full"></div>
              <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-pink-800 rounded-full"></div>
              <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-pink-800 rounded-full"></div>
              <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-pink-800 rounded-full"></div>
              <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-pink-800 rounded-full"></div>
            </div>
          </div>
        </div>
      </FloatingElement>

      {/* Premium Header */}
      <header className="relative z-20 px-4 md:px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 md:space-x-3">
              <div className="premium-logo bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 px-4 md:px-6 py-2 md:py-3 rounded-xl font-black text-white text-lg md:text-2xl shadow-2xl">
                PRIME
              </div>
              <span className="text-white font-bold text-lg md:text-2xl tracking-wider">TEAM</span>
            </div>
            
            <nav className="hidden lg:flex items-center space-x-8 text-white">
              <a href="#products" className="premium-nav-link font-semibold text-lg tracking-wide hover:text-blue-400 transition-colors">
                Наши продукты
              </a>
              <a href="#about" className="premium-nav-link font-semibold text-lg tracking-wide hover:text-blue-400 transition-colors">
                О нас
              </a>
            </nav>
            
            <div className="flex items-center space-x-3 md:space-x-4">
              <Button 
                className="premium-telegram-button bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-3 md:px-6 py-2 md:py-3 text-sm md:text-base font-bold rounded-xl shadow-lg transition-all duration-300"
                onClick={() => window.open('https://t.me/your_main_channel', '_blank')}
              >
                <MessageCircle className="mr-1 md:mr-2 h-4 md:h-5 w-4 md:w-5" />
                <span className="hidden sm:inline">Telegram</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Hero Section */}
      <main className="relative z-20 flex flex-col items-center justify-center text-center px-4 py-8 md:py-12 min-h-[70vh]">
        {/* Main Title */}
        <div className="mb-8 md:mb-12">
          <h1 className="premium-title text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 md:mb-8 tracking-wider">
            PRIME TEAM
          </h1>
          
          {/* Clean Subtitle */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-12 md:mb-16 tracking-wide">
            Зарабатывай прямо сейчас
          </h2>
        </div>

        {/* Enhanced Product Cards */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 max-w-4xl w-full mt-4 md:mt-8 mb-8 md:mb-12">
          {/* Prime Kazik Card */}
          <div className="premium-product-card flex-1 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-700 rounded-2xl p-6 md:p-8 text-center shadow-2xl backdrop-blur-sm border border-blue-400/30">
            <div className="text-white mb-6 md:mb-8">
              <h3 className="text-2xl md:text-3xl font-black mb-3 md:mb-4 tracking-wider">PRIME KAZIK</h3>
              <p className="text-lg md:text-xl opacity-90 mb-4 md:mb-6">Азартные игры и слоты</p>
            </div>
            <a href="https://t.me/+XiL8pf2uTkNhNDQ6" target="_blank" rel="noopener noreferrer">
              <Button className="premium-button bg-white text-blue-600 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-bold rounded-xl shadow-lg transition-all duration-300 w-full sm:w-auto">
                <Play className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                Начать играть
              </Button>
            </a>
          </div>

          {/* Prime Bet Card */}
          <div className="premium-product-card flex-1 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-2xl p-6 md:p-8 text-center shadow-2xl backdrop-blur-sm border border-red-400/30">
            <div className="text-white mb-6 md:mb-8">
              <h3 className="text-2xl md:text-3xl font-black mb-3 md:mb-4 tracking-wider">PRIME BET</h3>
              <p className="text-lg md:text-xl opacity-90 mb-4 md:mb-6">Ставки на спорт и киберспорт</p>
            </div>
            <a href="https://t.me/+mPyZzgC_tZ9lZjQy" target="_blank" rel="noopener noreferrer">
              <Button className="premium-button bg-white text-red-600 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-bold rounded-xl shadow-lg transition-all duration-300 w-full sm:w-auto">
                <Play className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                Начать играть
              </Button>
            </a>
          </div>
        </div>

        {/* Premium CTA Section */}
        <div className="text-center mb-12 md:mb-16 w-full px-2">
          <a href="https://t.me/primekaz_support" target="_blank" rel="noopener noreferrer">
            <Button className="premium-mega-cta bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-4 md:px-8 py-3 md:py-6 text-base md:text-xl font-black rounded-2xl shadow-2xl transition-all duration-300 w-full max-w-sm md:max-w-none md:w-auto">
              <ArrowRight className="mr-2 md:mr-3 h-4 md:h-6 w-4 md:w-6" />
              <span className="text-sm md:text-xl leading-tight">ПОЛУЧИТЬ ХАЛЯВНЫЕ ДЕНЬГИ !!!</span>
            </Button>
          </a>
          <p className="text-white text-sm md:text-lg mt-4 opacity-80 px-4">
            Начни зарабатывать уже сегодня
          </p>
        </div>
      </main>

      {/* What is this Section with Branching */}
      <section id="products" className="relative z-20 py-16 md:py-20 px-4 md:px-8 bg-gradient-to-b from-transparent to-black/20">`
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 md:mb-8 tracking-wider">
            Выбирай вид заработка, который тебе интересен
          </h2>
          
          {/* Branching Arrow */}
          <div className="flex justify-center mb-8 md:mb-12">
            <ArrowDown className="h-12 md:h-16 w-12 md:w-16 text-blue-400 animate-bounce" />
          </div>

          {/* Two Branches */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
            
            {/* Left Branch - Prime Kazik */}
            <Card className="premium-branch-card bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-2 border-purple-500/30 p-6 md:p-8 shadow-2xl backdrop-blur-sm">
              <div className="text-center mb-6 md:mb-8">
                <div className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-2xl">
                  <Zap className="h-8 md:h-10 w-8 md:w-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2 md:mb-4">PRIME KAZIK</h3>
                <p className="text-base md:text-lg text-purple-300 font-semibold">(казино)</p>
              </div>

              <div className="text-white space-y-4 md:space-y-6 mb-6 md:mb-8">
                <p className="text-lg md:text-xl font-bold text-center">
                  Любишь играть в азартные игры, но не хочешь проигрывать?
                </p>
                
                <div className="space-y-3 md:space-y-4">
                  <p className="text-base md:text-lg text-left">
                    <span className="text-yellow-400 font-bold">•</span> Тогда предлагаем тебе BOT telegram, который выдает сигналы с максимальной точностью по мини играм платформы 1win
                  </p>
                  
                  <div className="premium-info-box bg-black/30 p-3 md:p-4 rounded-xl border border-purple-500/20">
                    <h4 className="text-yellow-400 font-bold mb-2 text-left">Что это такое?</h4>
                    <p className="text-sm md:text-base opacity-90 text-left">
                      Мы разработали телеграм BOT, который обходит систему казино и знает наперед, какие действия нужно совершить для того, что бы НЕ ПРОИГРАТЬ
                    </p>
                  </div>
                  
                  <div className="premium-info-box bg-black/30 p-3 md:p-4 rounded-xl border border-purple-500/20">
                    <h4 className="text-green-400 font-bold mb-2 text-left">Как это работает?</h4>
                    <p className="text-sm md:text-base opacity-90 text-left">
                      Ниже есть обзор, а подробнее, ты можешь ознакомиться в нашем телеграмм канале кликнув по этому же видео
                    </p>
                  </div>
                </div>
              </div>

              <Button 
                className="premium-cta-button w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-bold rounded-xl shadow-2xl transition-all duration-300"
                onClick={() => window.open('https://t.me/+XiL8pf2uTkNhNDQ6', '_blank')}
              >
                <ExternalLink className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                Перейти в Telegram
              </Button>
            </Card>

            {/* Right Branch - Prime Bet */}
            <Card className="premium-branch-card bg-gradient-to-br from-red-900/30 to-orange-900/30 border-2 border-red-500/30 p-6 md:p-8 shadow-2xl backdrop-blur-sm">
              <div className="text-center mb-6 md:mb-8">
                <div className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-2xl">
                  <Trophy className="h-8 md:h-10 w-8 md:w-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2 md:mb-4">PRIME BET</h3>
                <p className="text-base md:text-lg text-red-300 font-semibold">(беттинг)</p>
              </div>

              <div className="text-white space-y-4 md:space-y-6 mb-6 md:mb-8">
                <p className="text-lg md:text-xl font-bold text-center">
                  Нравится следить за спортом и киберспортом?
                </p>
                
                <div className="space-y-3 md:space-y-4">
                  <p className="text-base md:text-lg text-left">
                    <span className="text-yellow-400 font-bold">•</span> Тогда мы предлагаем зарабатывать на этом вместе с нами. Наша команда профессиональных аналитиков, готова давать тебе точные прогнозы совершенно бесплатно.
                  </p>
                  
                  <div className="premium-info-box bg-black/30 p-3 md:p-4 rounded-xl border border-red-500/20">
                    <h4 className="text-yellow-400 font-bold mb-2 text-left">Что это такое?</h4>
                    <p className="text-sm md:text-base opacity-90 text-left">
                      Беттинг это самая стабильная сфера для заработка в наше время. У нас полностью прозрачная статистика, при которой мы зарабатываем +300% к балансу еженедельно
                    </p>
                  </div>
                  
                  <div className="premium-info-box bg-black/30 p-3 md:p-4 rounded-xl border border-red-500/20">
                    <h4 className="text-green-400 font-bold mb-2 text-left">Как это работает?</h4>
                    <p className="text-sm md:text-base opacity-90 text-left">
                      Ниже есть обзор, а подробнее, ты можешь ознакомиться в нашем телеграмм канале кликнув по этому же видео
                    </p>
                  </div>
                </div>
              </div>

              <Button 
                className="premium-cta-button w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-bold rounded-xl shadow-2xl transition-all duration-300"
                onClick={() => window.open('https://t.me/+mPyZzgC_tZ9lZjQy', '_blank')}
              >
                <ExternalLink className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                Перейти в Telegram
              </Button>
            </Card>
          </div>

          {/* Video GIFs Section - moved here under the branching cards */}
          <div className="mt-16 md:mt-20">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              
              {/* Kazino Video-GIF */}
              <div 
                className="premium-video-card bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-2 border-purple-500/30 p-6 md:p-8 rounded-2xl shadow-2xl backdrop-blur-sm cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-3xl"
                onClick={() => window.open('https://t.me/+XiL8pf2uTkNhNDQ6', '_blank')}
              >
                <div className="aspect-video bg-gradient-to-br from-purple-800 to-blue-800 rounded-xl mb-4 md:mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="text-white text-center z-10">
                    <Play className="h-16 md:h-20 w-16 md:w-20 mx-auto mb-4 opacity-80" />
                    <p className="text-lg md:text-xl font-bold">PRIME KAZIK</p>
                    <p className="text-sm md:text-base opacity-80">Видео-обзор</p>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white text-center mb-2">Казино</h3>
                <p className="text-white text-center opacity-80">Нажми для перехода в Telegram канал</p>
              </div>

              {/* Betting Video-GIF */}
              <div 
                className="premium-video-card bg-gradient-to-br from-red-900/50 to-orange-900/50 border-2 border-red-500/30 p-6 md:p-8 rounded-2xl shadow-2xl backdrop-blur-sm cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-3xl"
                onClick={() => window.open('https://t.me/+mPyZzgC_tZ9lZjQy', '_blank')}
              >
                <div className="aspect-video bg-gradient-to-br from-red-800 to-orange-800 rounded-xl mb-4 md:mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="text-white text-center z-10">
                    <Play className="h-16 md:h-20 w-16 md:w-20 mx-auto mb-4 opacity-80" />
                    <p className="text-lg md:text-xl font-bold">PRIME BET</p>
                    <p className="text-sm md:text-base opacity-80">Видео-обзор</p>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white text-center mb-2">Беттинг</h3>
                <p className="text-white text-center opacity-80">Нажми для перехода в Telegram канал</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-20 py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-12 md:mb-16 tracking-wider">
            О нас
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-blue-400">
                Мы команда, которая помогает заработать на беттинге и казино с минимальными потерями
              </h3>
              <p className="text-lg md:text-xl leading-relaxed mb-4 md:mb-6 opacity-90">
                Наша цель — предоставить вам инструменты и знания для успешного заработка в сфере азартных игр и спортивных ставок. Мы минимизируем ваши риски и максимизируем прибыль.
              </p>
              
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start space-x-3">
                  <Star className="h-5 md:h-6 w-5 md:w-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-base md:text-lg">Профессиональные аналитики с многолетним опытом</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-5 md:h-6 w-5 md:w-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-base md:text-lg">Прозрачная статистика и честные результаты</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Trophy className="h-5 md:h-6 w-5 md:w-6 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-base md:text-lg">Индивидуальный подход к каждому клиенту</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 p-6 md:p-8 shadow-2xl">
                <div className="text-center">
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Наши преимущества</h4>
                  <div className="grid grid-cols-2 gap-4 md:gap-6">
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-black text-blue-400 mb-1 md:mb-2">300%</div>
                      <div className="text-xs md:text-sm text-gray-300">Прибыль в месяц</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-black text-green-400 mb-1 md:mb-2">24/7</div>
                      <div className="text-xs md:text-sm text-gray-300">Поддержка</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-black text-purple-400 mb-1 md:mb-2">100%</div>
                      <div className="text-xs md:text-sm text-gray-300">Честность</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-black text-yellow-400 mb-1 md:mb-2">5+</div>
                      <div className="text-xs md:text-sm text-gray-300">Лет опыта</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="relative z-20 py-16 md:py-20 px-4 md:px-8 bg-gradient-to-b from-black/20 via-purple-900/10 to-black/30 overflow-hidden">
        {/* Floating Gaming Elements */}
        <FloatingElement className="absolute top-10 left-8 z-10" delay={0.5} duration={12}>
          <div className="w-12 md:w-16 h-12 md:h-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-2xl border-3 border-white/40">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-white/50 to-transparent relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 md:w-6 h-4 md:h-6 rounded-full bg-white shadow-inner"></div>
            </div>
          </div>
        </FloatingElement>

        <FloatingElement className="absolute top-20 right-12 z-10" delay={1.2} duration={10}>
          <div className="w-14 md:w-18 h-14 md:h-18 bg-gradient-to-br from-amber-200 to-amber-400 rounded-lg shadow-2xl border-2 border-amber-300 rotate-12">
            <div className="w-full h-full p-2 md:p-3 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-1">
                <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-amber-800 rounded-full"></div>
                <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-amber-800 rounded-full"></div>
                <div className="w-1.5 md:w-2 h-1.5 md:h-2"></div>
                <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-amber-800 rounded-full"></div>
              </div>
            </div>
          </div>
        </FloatingElement>

        <FloatingElement className="absolute bottom-16 left-16 z-10" delay={2} duration={14}>
          <div className="w-10 md:w-14 h-10 md:h-14 rounded-full bg-gradient-to-br from-violet-500 to-violet-700 shadow-2xl border-3 border-white/40">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-white/50 to-transparent relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 md:w-5 h-3 md:h-5 rounded-full bg-white shadow-inner"></div>
              <div className="absolute top-1 right-1 w-1 h-1 bg-white/60 rounded-full"></div>
            </div>
          </div>
        </FloatingElement>

        <FloatingElement className="absolute bottom-8 right-20 z-10" delay={2.8} duration={9}>
          <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-rose-200 to-rose-400 rounded-xl shadow-2xl border border-rose-300 -rotate-12">
            <div className="w-full h-full p-2 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-0.5">
                <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-rose-800 rounded-full"></div>
                <div className="w-1 md:w-1.5 h-1 md:h-1.5"></div>
                <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-rose-800 rounded-full"></div>
                <div className="w-1 md:w-1.5 h-1 md:h-1.5"></div>
                <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-rose-800 rounded-full"></div>
                <div className="w-1 md:w-1.5 h-1 md:h-1.5"></div>
                <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-rose-800 rounded-full"></div>
                <div className="w-1 md:w-1.5 h-1 md:h-1.5"></div>
                <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-rose-800 rounded-full"></div>
              </div>
            </div>
          </div>
        </FloatingElement>

        <FloatingElement className="absolute top-1/2 left-4 z-10" delay={3.5} duration={11}>
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-700 shadow-2xl border-2 border-white/40">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-white/50 to-transparent relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 md:w-4 h-2 md:h-4 rounded-full bg-white shadow-inner"></div>
            </div>
          </div>
        </FloatingElement>

        <div className="max-w-6xl mx-auto relative z-20">
          <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-12 md:mb-16 tracking-wider drop-shadow-2xl">
            Как начать зарабатывать
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Step 1 */}
            <Card className="premium-step-card bg-gradient-to-br from-blue-900/60 via-blue-800/40 to-purple-900/60 border-2 border-blue-400/50 p-6 md:p-8 shadow-[0_20px_50px_rgba(59,130,246,0.3)] backdrop-blur-lg text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_10px_30px_rgba(59,130,246,0.5)] border-4 border-white/20">
                <span className="text-2xl md:text-3xl font-black text-white drop-shadow-lg">1</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-4 drop-shadow-lg">Выбери направление</h3>
              <p className="text-white/90 leading-relaxed">Определись, что тебе больше интересно - ставки на спорт или казино</p>
            </Card>

            {/* Step 2 */}
            <Card className="premium-step-card bg-gradient-to-br from-purple-900/60 via-purple-800/40 to-red-900/60 border-2 border-purple-400/50 p-6 md:p-8 shadow-[0_20px_50px_rgba(147,51,234,0.3)] backdrop-blur-lg text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-r from-purple-400 via-purple-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_10px_30px_rgba(147,51,234,0.5)] border-4 border-white/20">
                <span className="text-2xl md:text-3xl font-black text-white drop-shadow-lg">2</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-4 drop-shadow-lg">Подпишись на канал</h3>
              <p className="text-white/90 leading-relaxed">Перейди в соответствующий Telegram канал и подпишись</p>
            </Card>

            {/* Step 3 */}
            <Card className="premium-step-card bg-gradient-to-br from-red-900/60 via-red-800/40 to-orange-900/60 border-2 border-red-400/50 p-6 md:p-8 shadow-[0_20px_50px_rgba(239,68,68,0.3)] backdrop-blur-lg text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-r from-red-400 via-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_10px_30px_rgba(239,68,68,0.5)] border-4 border-white/20">
                <span className="text-2xl md:text-3xl font-black text-white drop-shadow-lg">3</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-4 drop-shadow-lg">Начни зарабатывать</h3>
              <p className="text-white/90 leading-relaxed">Следуй нашим сигналам и прогнозам для получения прибыли</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Promo Codes Section */}
      <section className="relative z-20 py-16 md:py-20 px-4 md:px-8 bg-gradient-to-b from-black/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 md:mb-8 tracking-wider">
            КАК НА СТАРТЕ ПОЛУЧИТЬ ХАЛЯВНЫЕ ДЕНЬГИ?
          </h2>
          
          <div className="premium-promo-card bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-2 border-yellow-500/30 p-6 md:p-8 shadow-2xl backdrop-blur-sm rounded-xl">
            <div className="text-white text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Промокоды для начала</h3>
              
              <div className="space-y-6">
                <div className="relative rounded-xl overflow-hidden">
                  <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="w-full h-full"
                  >
                    {slides.map((slide) => (
                      <SwiperSlide key={slide.id} className="h-full">
                        <div className="relative w-full h-full flex items-center justify-center">
                          <img 
                            src={slide.image} 
                            alt={slide.alt}
                            className="max-w-full max-h-full object-contain"
                            loading="lazy"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                
                <p className="text-base md:text-lg opacity-90">
                  Следите за обновлениями в наших социальных сетях, чтобы не пропустить эксклюзивные промокоды!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="relative z-20 py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-black text-white mb-8 md:mb-12 tracking-wider">
            Следите за нами в социальных сетях
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Button 
              className="premium-social-button bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 md:px-8 py-4 md:py-5 text-base md:text-lg font-bold rounded-2xl shadow-2xl transition-all duration-300"
              onClick={() => window.open('https://t.me/primekaz_support', '_blank')}
            >
              <MessageCircle className="mr-2 md:mr-3 h-5 md:h-6 w-5 md:w-6" />
              Telegram
            </Button>
            
            <Button 
              className="premium-social-button bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white px-6 md:px-8 py-4 md:py-5 text-base md:text-lg font-bold rounded-2xl shadow-2xl transition-all duration-300"
              onClick={() => window.open('https://t.me/+mPyZzgC_tZ9lZjQy', '_blank')}
            >
              <Instagram className="mr-2 md:mr-3 h-5 md:h-6 w-5 md:w-6" />
              Instagram
            </Button>
            
            <Button 
              className="premium-social-button bg-gradient-to-r from-black to-gray-900 hover:from-gray-900 hover:to-black text-white px-6 md:px-8 py-4 md:py-5 text-base md:text-lg font-bold rounded-2xl shadow-2xl transition-all duration-300"
              onClick={() => window.open('https://www.tiktok.com/@prime_team777?_t=ZT-8y77Z3ddsTO&_r=1', '_blank')}
            >
              <Music className="mr-2 md:mr-3 h-5 md:h-6 w-5 md:w-6" />
              TikTok
            </Button>
          </div>
          
          <p className="text-white text-base md:text-lg mt-8 opacity-80">
            Присоединяйтесь к нашему сообществу и будьте в курсе всех новостей и акций!
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrimeLanding;
