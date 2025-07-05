import { Hero } from "./components/Hero"
import { ProductGrid } from "./components/ProductGrid"
import { CategorySection } from "./components/CategorySection"
import { Footer } from "./components/Footer"

const products = [
  {
    id: 1,
    name: 'Chả Giò Truyền Thống',
    description: 'Chả giò được làm thủ công theo công thức truyền thống, giòn rụm, thơm ngon',
    images: [
      '/photo/chả giò/IMG_0206.JPG',
      '/photo/chả giò/IMG_0207.JPG',
      '/photo/chả giò/IMG_0208.JPG',
      '/photo/chả giò/IMG_0209.JPG',
    ],
    category: 'Chả Giò',
    featured: true,
  },
  {
    id: 2,
    name: 'Chả Lụa Đặc Biệt',
    description: 'Chả lụa thơm ngon, được chế biến từ thịt heo tươi ngon nhất',
    images: [
      '/photo/chả lụa đặc biệt/IMG_0227.JPG',
      '/photo/chả lụa đặc biệt/IMG_0239.JPG',
    ],
    category: 'Chả Lụa',
    featured: true,
  },
  {
    id: 3,
    name: 'Chả Bò Đà Nẵng',
    description: 'Đặc sản chả bò Đà Nẵng với hương vị đậm đà, thơm ngon',
    images: ['/photo/chả bò đà nẵng/IMG_0235.JPG'],
    category: 'Chả Bò',
    featured: false,
  },
  {
    id: 4,
    name: 'Chả Chiên Bắc Đặc Biệt',
    description: 'Chả chiên kiểu Bắc với công thức độc đáo, thơm ngon khó cưỡng',
    images: ['/photo/chả chiên bắc đặc biệt/IMG_0236.JPG'],
    category: 'Chả Chiên',
    featured: false,
  },
  {
    id: 5,
    name: 'Chả Chiên Dài',
    description: 'Chả chiên dài giòn tan, thơm ngon, được yêu thích nhất',
    images: [
      '/photo/chả chiên dài/IMG_0228.JPG',
      '/photo/chả chiên dài/IMG_0229.JPG',
      '/photo/chả chiên dài/IMG_0230.JPG',
      '/photo/chả chiên dài/IMG_0237.JPG',
    ],
    category: 'Chả Chiên',
    featured: true,
  },
  {
    id: 6,
    name: 'Chả Thủ Xào Đặc Biệt',
    description: 'Chả thủ xào với công thức đặc biệt, hương vị độc đáo',
    images: [
      '/photo/chả thủ xào đặc biệt/IMG_0226.JPG',
      '/photo/chả thủ xào đặc biệt/IMG_0231.JPG',
      '/photo/chả thủ xào đặc biệt/IMG_0232.JPG',
      '/photo/chả thủ xào đặc biệt/IMG_0233.JPG',
      '/photo/chả thủ xào đặc biệt/IMG_0240.JPG',
    ],
    category: 'Chả Thủ',
    featured: true,
  },
  {
    id: 7,
    name: 'Giò Truyền Thống',
    description: 'Giò được làm theo công thức truyền thống, thơm ngon đậm đà',
    images: ['/photo/giò/IMG_0225.JPG'],
    category: 'Giò',
    featured: false,
  },
  {
    id: 8,
    name: 'Pate Đặc Biệt',
    description: 'Pate thơm ngon, mềm mịn, được chế biến từ nguyên liệu tươi ngon',
    images: [
      '/photo/pate/IMG_0213.JPG',
      '/photo/pate/IMG_0214.JPG',
      '/photo/pate/IMG_0215.JPG',
      '/photo/pate/IMG_0216.JPG',
      '/photo/pate/IMG_0217.JPG',
      '/photo/pate/IMG_0222.JPG',
    ],
    category: 'Pate',
    featured: true,
  },
  {
    id: 9,
    name: 'Thịt Giò Cao Cấp',
    description: 'Thịt giò cao cấp, thơm ngon, được chế biến từ thịt heo tươi ngon',
    images: [
      '/photo/thịt giò /IMG_0218.JPG',
      '/photo/thịt giò /IMG_0219.JPG',
      '/photo/thịt giò /IMG_0220.JPG',
      '/photo/thịt giò /IMG_0221.JPG',
    ],
    category: 'Thịt Giò',
    featured: false,
  },
]

// Group products by category
const productsByCategory = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = []
  }
  acc[product.category].push(product)
  return acc
}, {} as Record<string, typeof products>)

// Category descriptions for each showcase
const categoryDescriptions = {
  'Chả Giò': 'Chả giò truyền thống Việt Nam với lớp vỏ giòn rụm, nhân thịt thơm ngon được chế biến theo công thức gia truyền.',
  'Chả Lụa': 'Chả lụa mềm mịn, thơm ngon với hương vị đậm đà đặc trưng, được làm từ thịt heo tươi ngon.',
  'Chả Bò': 'Đặc sản chả bò Đà Nẵng với hương vị đậm đà, thơm ngon khó cưỡng.',
  'Chả Chiên': 'Chả chiên giòn tan bên ngoài, mềm mịn bên trong với hương vị thơm ngon đặc biệt.',
  'Chả Thủ': 'Chả thủ xào được làm thủ công với công thức đặc biệt, hương vị độc đáo.',
  'Giò': 'Giò truyền thống Việt Nam được chế biến theo công thức gia truyền, thơm ngon đậm đà.',
  'Pate': 'Pate mềm mịn, thơm ngon được chế biến từ nguyên liệu tươi ngon chất lượng cao.',
  'Thịt Giò': 'Thịt giò cao cấp với hương vị thơm ngon, được chế biến từ thịt heo tươi ngon.'
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold section-title mb-4">
              Sản Phẩm Nổi Bật
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Khám phá các sản phẩm đặc sản truyền thống Việt Nam chất lượng cao,
              được chế biến từ nguyên liệu tươi ngon nhất
            </p>
          </div>

          <ProductGrid products={products.filter(p => p.featured)} />
        </div>
      </section>

      {/* Category Showcase Sections */}
      {Object.entries(productsByCategory).map(([category, categoryProducts], index) => (
        <section
          key={category}
          className={`py-20 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CategorySection
              category={category}
              products={categoryProducts}
              description={categoryDescriptions[category as keyof typeof categoryDescriptions]}
            />
          </div>
        </section>
      ))}

      {/* Contact Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold section-title mb-6">
            Liên Hệ Với Chúng Tôi
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Để biết thêm thông tin chi tiết về sản phẩm và báo giá,
            vui lòng liên hệ với chúng tôi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white px-6 py-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-primary-800 mb-2">Hotline</h3>
              <p className="text-gray-600">036 920 0939</p>
            </div>
            <div className="bg-white px-6 py-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-primary-800 mb-2">Email</h3>
              <p className="text-gray-600">chaluaphuhung@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}