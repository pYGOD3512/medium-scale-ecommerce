'use client'
import { store } from "@/features/store"
import { Jost } from 'next/font/google'
import { Provider } from "react-redux"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify"
import "/public/assets/css/animate.css"
import "/public/assets/css/bootstrap.min.css"
import "/public/assets/css/fontawesome.min.css"
import "/public/assets/css/nice-select.css"
import "/public/assets/css/slick.css"
import "/public/assets/css/swiper-bundle.css"
import "/public/assets/css/magnific-popup.css"
import "/public/assets/css/meanmenu.css"
import "/public/assets/css/spacing.css"
import "/public/assets/css/main.css"
const jost = Jost({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--tp-ff-body",
})
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${jost.variable}`}>
                <Provider store={store}>
                    {children}
                    <ToastContainer
                        position="bottom-right"
                        autoClose={500}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                    />
                </Provider>
            </body>
        </html>
    )
}
