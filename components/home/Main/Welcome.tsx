import Example from "./Example"
import ModelSelect from "./ModelSelect"


// 欢迎页面父组件
export default function Welcome() {
    return (
        <div className='w-full max-w-4xl mx-auto flex flex-col items-center px-4 py-20'>
            <ModelSelect />
            <h1 className='mt-20 text-4xl font-bold'>
                HU JIANG GPT3.5-turo
            </h1>
            <Example />
        </div>
    )
}