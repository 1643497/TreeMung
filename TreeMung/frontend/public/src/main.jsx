import { ShoppingCart, CreditCard } from 'lucide-react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { useState } from 'react';
import { Label } from './components/ui/label';
import logoImage from "figma:asset/0dc827baad6f690f322a50b32c95857854931b7a.png";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      {/* Header */}
      <header className="bg-[#ffffff] border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <img src={logoImage} alt="트리멍 로고" className="h-12 w-auto" />
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-700 hover:text-gray-900">홈</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">제품</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">블로드 아이기</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">리뷰</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">슬럼족</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-700 hover:text-gray-900">
              <CreditCard className="w-5 h-5" />
            </button>
            <button className="relative text-gray-700 hover:text-gray-900">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 py-12">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1604544203292-0daa7f847478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjB0cmVhdHMlMjBzbmFja3N8ZW58MXx8fHwxNzY2OTc4MzEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="반려동물 간식" 
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* 간식 찾기 섹션 */}
      <section className="bg-white py-12">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              강아지에게 맞는 간식을 찾아보세요
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="pet-name" className="text-sm text-gray-700 mb-1 block">반려동물 이름</Label>
                <Input id="pet-name" placeholder="예: 초코" className="w-full" />
              </div>
              <div>
                <Label htmlFor="pet-type" className="text-sm text-gray-700 mb-1 block">반려동물 종류</Label>
                <Select>
                  <SelectTrigger id="pet-type" className="w-full">
                    <SelectValue placeholder="선택해주세요" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">소형견 (5kg 이하)</SelectItem>
                    <SelectItem value="medium">중형견 (5-15kg)</SelectItem>
                    <SelectItem value="large">대형견 (15kg 이상)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="age" className="text-sm text-gray-700 mb-1 block">나이</Label>
                <Select>
                  <SelectTrigger id="age" className="w-full">
                    <SelectValue placeholder="선택해주세요" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="puppy">강아지 (1세 미만)</SelectItem>
                    <SelectItem value="adult">성견 (1-7세)</SelectItem>
                    <SelectItem value="senior">노령견 (7세 이상)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="allergy" className="text-sm text-gray-700 mb-1 block">알레르기 여부</Label>
                <Input id="allergy" placeholder="예: 닭고기, 곡물" className="w-full" />
              </div>
            </div>
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white mt-6">
              맞춤 간식 찾기
            </Button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-[1400px] mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="aspect-square bg-[#f5f0e8] rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-24 h-32 bg-[#d4c4a8] rounded-md relative">
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#8B7355] rounded-full flex items-center justify-center">
                      <div className="text-white text-xl">🐾</div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-sm text-gray-800 mb-1">강아지 간식</h3>
              <p className="text-xs text-gray-600 mb-2">자연재료</p>
              <div className="flex items-center gap-2">
                <span className="text-orange-500 font-semibold">15,000원</span>
                <span className="text-xs text-gray-400 line-through">18,000원</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}