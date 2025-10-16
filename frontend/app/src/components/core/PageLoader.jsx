import { Suspense } from "react"

export default function PageLoader(Compnent){
    return function WrappedComponent(props){
        return(
            <Suspense fallback={<>Loading</>}>
                <Compnent  {...props} />
            </Suspense>
        )
    }
}