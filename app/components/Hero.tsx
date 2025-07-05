import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">

          {/* Left Content */}
          <div className="space-y-8">
            {/* Company Logo & Badge */}
            <div className="flex items-center space-x-6">
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image
                  src="/photo/logo/IMG_0223.JPG"
                  alt="Phú Hưng Logo"
                  fill
                  className="object-contain rounded-xl shadow-lg"
                  priority
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
                  Phú Hưng
                </h1>
                <p className="text-lg text-slate-600 font-medium">Since 1998</p>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Đặc Sản Chả Giò
                <span className="block text-amber-600">Truyền Thống</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed max-w-2xl">
                Chuyên cung cấp giò chả các loại | Chả lụa - Chả bò - Chả chiên - Chả giò - Chả thủ
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-6 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">26+</div>
                <div className="text-sm text-slate-600 font-medium">Năm Kinh Nghiệm</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">100%</div>
                <div className="text-sm text-slate-600 font-medium">Nguyên Liệu Tươi</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl">
                Xem Sản Phẩm
              </button>
              <button className="px-8 py-4 border-2 border-slate-300 hover:border-slate-400 text-slate-700 font-semibold rounded-lg transition-colors hover:bg-slate-50">
                Liên Hệ Tư Vấn
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-slate-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-600">Hotline</div>
                  <div className="font-semibold text-slate-900">036 920 0939</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-600">Email</div>
                  <div className="font-semibold text-slate-900">chaluaphuhung@gmail.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Featured Product 1 */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src="/photo/chả giò/IMG_0206.JPG"
                      alt="Chả Giò Truyền Thống"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="font-semibold">Chả Giò</div>
                      <div className="text-sm">Truyền Thống</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Product 2 */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow mt-8">
                <div className="aspect-square bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src="/photo/chả lụa đặc biệt/IMG_0227.JPG"
                      alt="Chả Lụa Đặc Biệt"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="font-semibold">Chả Lụa</div>
                      <div className="text-sm">Đặc Biệt</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Product 3 */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow -mt-8">
                <div className="aspect-square bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src="/photo/pate/IMG_0213.JPG"
                      alt="Pate Đặc Biệt"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="font-semibold">Pate</div>
                      <div className="text-sm">Đặc Biệt</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Product 4 */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src="/photo/chả chiên dài/IMG_0228.JPG"
                      alt="Chả Chiên Dài"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="font-semibold">Chả Chiên</div>
                      <div className="text-sm">Dài</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-200 to-transparent"></div>
    </section>
  )
}