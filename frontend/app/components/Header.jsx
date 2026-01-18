// // "use client";

// // import { Shield, Menu, X } from "lucide-react";
// // import Link from "next/link";
// // import { usePathname } from "next/navigation";
// // import { useState } from "react";

// // export default function Header({ showBackButton = false }) {
// //   const pathname = usePathname();
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
  
// //   const navigation = [
// //     { name: "Home", href: "/" },
// //     { name: "Features", href: "/features" },
// //     { name: "Examples", href: "/examples" },
// //     { name: "Pricing", href: "/pricing" },
// //     { name: "Contact", href: "/contact" },
// //     { name: "About", href: "/about" },
// //   ];

// //   return (
// //     <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-amber-100">
// //       <div className="container mx-auto px-6 py-4">
// //         <div className="flex justify-between items-center">
// //           {/* Logo */}
// //           <div className="flex items-center gap-3">
// //             <Link href="/" className="flex items-center gap-3">
// //               <div className="w-10 h-10 bg-gradient-to-br from-maroon-700 to-brown-800 rounded-xl flex items-center justify-center shadow-lg">
// //                 <Shield className="w-6 h-6 text-white" />
// //               </div>
// //               <div>
// //                 <h1 className="text-2xl font-bold text-gray-900">LegalEase</h1>
// //                 <p className="text-xs text-brown-600 font-medium">AI Legal Assistant</p>
// //               </div>
// //             </Link>
// //           </div>

// //           {/* Desktop Navigation */}
// //           <nav className="hidden md:flex items-center gap-8">
// //             {navigation.map((item) => (
// //               <Link
// //                 key={item.name}
// //                 href={item.href}
// //                 className={`font-medium transition-colors ${
// //                   pathname === item.href
// //                     ? "text-maroon-700 font-semibold"
// //                     : "text-brown-700 hover:text-maroon-700"
// //                 }`}
// //               >
// //                 {item.name}
// //               </Link>
// //             ))}
            
// //             {/* Back Button (conditional) */}
// //             {showBackButton && (
// //               <Link
// //                 href="/"
// //                 className="flex items-center gap-2 px-4 py-2 text-brown-700 hover:text-maroon-700 font-medium transition-colors"
// //               >
// //                 <X className="w-4 h-4" />
// //                 Back to Upload
// //               </Link>
// //             )}
            
// //             {/* CTA Button */}
// //             <Link
// //               href="/document"
// //               className="px-6 py-3 bg-gradient-to-r from-maroon-700 to-brown-800 text-white rounded-xl hover:from-maroon-800 hover:to-brown-900 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
// //             >
// //               Try Now
// //             </Link>
// //           </nav>

// //           {/* Mobile Menu Button */}
// //           <button
// //             onClick={() => setIsMenuOpen(!isMenuOpen)}
// //             className="md:hidden p-2 text-brown-700 hover:text-maroon-700"
// //           >
// //             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
// //           </button>
// //         </div>

// //         {/* Mobile Navigation */}
// //         {isMenuOpen && (
// //           <div className="md:hidden mt-4 pb-4 border-t border-amber-100 pt-4">
// //             <div className="flex flex-col gap-4">
// //               {navigation.map((item) => (
// //                 <Link
// //                   key={item.name}
// //                   href={item.href}
// //                   onClick={() => setIsMenuOpen(false)}
// //                   className={`font-medium py-2 px-3 rounded-lg transition-colors ${
// //                     pathname === item.href
// //                       ? "bg-maroon-50 text-maroon-700 font-semibold"
// //                       : "text-brown-700 hover:bg-amber-50 hover:text-maroon-700"
// //                   }`}
// //                 >
// //                   {item.name}
// //                 </Link>
// //               ))}
              
// //               {showBackButton && (
// //                 <Link
// //                   href="/"
// //                   onClick={() => setIsMenuOpen(false)}
// //                   className="flex items-center gap-2 py-2 px-3 text-brown-700 hover:bg-amber-50 hover:text-maroon-700 rounded-lg transition-colors"
// //                 >
// //                   <X className="w-4 h-4" />
// //                   Back to Upload
// //                 </Link>
// //               )}
              
// //               <Link
// //                 href="/document"
// //                 onClick={() => setIsMenuOpen(false)}
// //                 className="px-4 py-3 bg-gradient-to-r from-maroon-700 to-brown-800 text-white rounded-lg text-center font-semibold mt-2"
// //               >
// //                 Try Now
// //               </Link>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </header>
// //   );
// // }
// "use client";

// import { Shield, Menu, X } from "lucide-react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";

// export default function Header({ showBackButton = false }) {
//   const pathname = usePathname();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
  
//   const navigation = [
//     { name: "Home", href: "/" },
//     { name: "Features", href: "/features" },
//     { name: "Examples", href: "/examples" },
//     // { name: "Pricing", href: "/pricing" },
//     { name: "Contact", href: "/contact" },
//     { name: "About", href: "/about" },
//   ];

//   return (
//     <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-amber-100">
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <div className="flex items-center gap-3">
//             <Link href="/" className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-gradient-to-br from-maroon-700 to-brown-800 rounded-xl flex items-center justify-center shadow-lg">
//                 <Shield className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold text-gray-900">LegalEase</h1>
//                 <p className="text-xs text-brown-600 font-medium">AI Legal Assistant</p>
//               </div>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-8">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className={`font-medium transition-colors ${
//                   pathname === item.href
//                     ? "text-maroon-700 font-semibold"
//                     : "text-brown-700 hover:text-maroon-700"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
            
//             {/* Back Button (conditional) */}
//             {showBackButton && (
//               <Link
//                 href="/"
//                 className="flex items-center gap-2 px-4 py-2 text-brown-700 hover:text-maroon-700 font-medium transition-colors"
//               >
//                 <X className="w-4 h-4" />
//                 Back to Upload
//               </Link>
//             )}
            
//             {/* CTA Button */}
//             <Link
//               href="/document"
//               className="px-6 py-3 bg-gradient-to-r from-maroon-700 to-brown-800 text-white rounded-xl hover:from-maroon-800 hover:to-brown-900 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
//             >
//               Try Now
//             </Link>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden p-2 text-brown-700 hover:text-maroon-700"
//           >
//             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden mt-4 pb-4 border-t border-amber-100 pt-4">
//             <div className="flex flex-col gap-4">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   onClick={() => setIsMenuOpen(false)}
//                   className={`font-medium py-2 px-3 rounded-lg transition-colors ${
//                     pathname === item.href
//                       ? "bg-maroon-50 text-maroon-700 font-semibold"
//                       : "text-brown-700 hover:bg-amber-50 hover:text-maroon-700"
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
              
//               {showBackButton && (
//                 <Link
//                   href="/"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="flex items-center gap-2 py-2 px-3 text-brown-700 hover:bg-amber-50 hover:text-maroon-700 rounded-lg transition-colors"
//                 >
//                   <X className="w-4 h-4" />
//                   Back to Upload
//                 </Link>
//               )}
              
//               <Link
//                 href="/document"
//                 onClick={() => setIsMenuOpen(false)}
//                 className="px-4 py-3 bg-gradient-to-r from-maroon-700 to-brown-800 text-white rounded-lg text-center font-semibold mt-2"
//               >
//                 Try Now
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }
"use client";

import { Shield, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header({ showBackButton = false }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Examples", href: "/examples" },
    
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-amber-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-maroon-700 to-brown-800 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">LegalEase</h1>
                <p className="text-xs text-brown-600 font-medium">AI Legal Assistant</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors ${
                  pathname === item.href
                    ? "text-maroon-700 font-semibold"
                    : "text-brown-700 hover:text-maroon-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Back Button (conditional) */}
            {showBackButton && (
              <Link
                href="/"
                className="flex items-center gap-2 px-4 py-2 text-brown-700 hover:text-maroon-700 font-medium transition-colors"
              >
                <X className="w-4 h-4" />
                Back to Upload
              </Link>
            )}
            
            {/* CTA Button */}
            <Link
              href="/document"
              className="px-6 py-3 bg-gradient-to-r from-maroon-700 to-brown-800 text-white rounded-xl hover:from-maroon-800 hover:to-brown-900 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Try Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-brown-700 hover:text-maroon-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-amber-100 pt-4">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium py-2 px-3 rounded-lg transition-colors ${
                    pathname === item.href
                      ? "bg-maroon-50 text-maroon-700 font-semibold"
                      : "text-brown-700 hover:bg-amber-50 hover:text-maroon-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {showBackButton && (
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2 py-2 px-3 text-brown-700 hover:bg-amber-50 hover:text-maroon-700 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                  Back to Upload
                </Link>
              )}
              
              <Link
                href="/document"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 bg-gradient-to-r from-maroon-700 to-brown-800 text-white rounded-lg text-center font-semibold mt-2"
              >
                Try Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}