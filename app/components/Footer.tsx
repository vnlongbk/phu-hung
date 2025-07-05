'use client'

import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src="/photo/logo/IMG_0223.JPG"
                  alt="Phú Hưng Logo"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Phú Hưng</h3>
                <p className="text-slate-300">Đặc sản truyền thống Việt Nam</p>
              </div>
            </div>

            <p className="text-slate-300 mb-6 leading-relaxed">
              Chuyên cung cấp giò chả các loại | Chả lụa - Chả bò - Chả chiên - Chả giò - Chả thủ
              Since 1998
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/chaluaphuhung" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-400">Sản Phẩm</h4>
            <ul className="space-y-3">
              <li><span className="text-slate-300">Chả Giò</span></li>
              <li><span className="text-slate-300">Chả Lụa</span></li>
              <li><span className="text-slate-300">Chả Bò</span></li>
              <li><span className="text-slate-300">Chả Chiên</span></li>
              <li><span className="text-slate-300">Pate</span></li>
              <li><span className="text-slate-300">Giò</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-400">Liên Hệ</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 mt-1 text-amber-400">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-300">Chuyên cung cấp giò chả các loại</p>
                  <p className="text-slate-300">Chả lụa - Chả bò - Chả chiên - Chả giò - Chả thủ</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-amber-400">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:0369200939" className="text-slate-300 hover:text-amber-400 transition-colors">036 920 0939</a>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-amber-400">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:chaluaphuhung@gmail.com" className="text-slate-300 hover:text-amber-400 transition-colors">chaluaphuhung@gmail.com</a>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-amber-400">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-300">Thứ 2 - Thứ 7: 8:00 - 18:00</p>
                  <p className="text-slate-300">Chủ nhật: 8:00 - 12:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © 2024 Phú Hưng. Tất cả quyền được bảo lưu.
            </div>

            <div className="flex space-x-6 text-sm">
              <span className="text-slate-400">Chính sách bảo mật</span>
              <span className="text-slate-400">Điều khoản sử dụng</span>
              <span className="text-slate-400">Sitemap</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-amber-600 hover:bg-amber-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  )
}