import { useState } from 'react';

import { ShoppingBag, Menu, X, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Nike Air Max',
    description: 'Disponível nos tamanhos: 37, 38, 39, 40 e 42',
    price: 'R$ 599,90',
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=500&h=500'
  },
  {
    id: 2,
    name: 'Adidas Ultraboost',
    description: 'Disponível nos tamanhos: 37, 38, 39, 40 e 42',
    price: 'R$ 799,90',
    image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&q=80&w=500&h=500'
  },
  {
    id: 3,
    name: 'New Balance 574',
    description: 'Disponível nos tamanhos: 37, 38, 39, 40 e 42',
    price: 'R$ 459,90',
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=500&h=500'
  },
  {
    id: 4,
    name: 'Puma RS-X',
    description: 'Disponível nos tamanhos: 37, 38, 39, 40 e 42',
    price: 'R$ 549,90',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=500&h=500'
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center h-20">
            <h1 className="text-2xl font-bold tracking-tighter">EBAC•SHOES</h1>
            
            <button 
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden lg:flex space-x-12 text-sm font-medium">
              <a href="#about" className="hover:text-gray-600 transition-colors">
                Sobre
              </a>
              <a href="#products" className="hover:text-gray-600 transition-colors">
                Produtos
              </a>
              <a href="#contact" className="hover:text-gray-600 transition-colors">
                Contato
              </a>
            </div>
          </nav>

          {isMenuOpen && (
            <div className="lg:hidden py-6 space-y-6 text-center">
              <a 
                href="#about" 
                className="block py-2 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
              <a 
                href="#products" 
                className="block py-2 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Produtos
              </a>
              <a 
                href="#contact" 
                className="block py-2 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
            </div>
          )}
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-6xl font-bold mb-8 leading-tight">
              Estilo e conforto para seus pés
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Descubra nossa coleção exclusiva de tênis das melhores marcas mundiais
            </p>
            <a href="#products" className="btn-primary inline-flex">
              Ver produtos
              <ChevronRight size={20} />
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-bold leading-tight">
                  Uma história de paixão por calçados
                </h2>
                <div className="space-y-6 text-gray-600">
                  <p className="text-lg leading-relaxed">
                    Desde 2010, a EBAC Shoes tem sido sinônimo de qualidade e estilo no mercado de calçados.
                    Nossa missão é proporcionar a melhor experiência de compra, com produtos selecionados
                    e um atendimento excepcional.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Trabalhamos apenas com as melhores marcas e modelos, garantindo que cada par de tênis
                    que vendemos atenda aos mais altos padrões de qualidade e conforto.
                  </p>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=800"
                  alt="EBAC Shoes Store"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Nossa Coleção</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <article key={product.id} className="card group">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    <p className="text-2xl font-bold mb-6">{product.price}</p>
                    <button className="btn-primary w-full">
                      <ShoppingBag size={20} />
                      Adicionar ao carrinho
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="section-title">Entre em Contato</h2>
            <p className="text-xl text-gray-600 mb-12">
              Estamos aqui para ajudar. Entre em contato conosco para tirar suas dúvidas.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-gray-50">
                <h3 className="text-xl font-bold mb-4">Atendimento</h3>
                <p className="text-gray-600">
                  Segunda a Sexta<br />
                  09h às 18h
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-gray-50">
                <h3 className="text-xl font-bold mb-4">Contato</h3>
                <p className="text-gray-600">
                  contato@ebacshoes.com<br />
                  (11) 1234-5678
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold mb-6">EBAC•SHOES</h3>
              <p className="text-gray-400">
                Sua loja online de calçados esportivos
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Navegação</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#products" className="text-gray-400 hover:text-white transition-colors">
                    Produtos
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Redes Sociais</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Receba nossas novidades
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-4 py-2 rounded-full bg-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-100 transition-colors">
                  OK
                </button>
              </form>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>&copy; 2024 EBAC Shoes. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;