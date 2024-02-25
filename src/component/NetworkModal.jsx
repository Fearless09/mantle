import React from 'react'
import { CloseSVG, LineBreakSVG, SearchIconSVG } from './SVGComponents'

const coins = [
    {
        icon: '/assest/mnt.svg',
        symbol: 'MNT',
        name: 'Mantle',
        balance: '0.0'
    },
    {
        icon: '/assest/usdc.webp',
        symbol: 'USDC',
        name: 'USD Coin',
        balance: '0.0'
    },
    {
        icon: '/assest/usdt.svg',
        symbol: 'USDT',
        name: 'Tether USD',
        balance: '0.0'
    },
    {
        icon: '/mnt.svg',
        symbol: 'LUSD',
        name: 'LUSD Stablecoin',
        balance: '0.0'
    },
    {
        icon: '/mnt.svg',
        symbol: 'USDLR',
        name: 'USDLR by Stable',
        balance: '0.0'
    },
    {
        icon: '/mnt.svg',
        symbol: 'ETH',
        name: 'Ether',
        balance: '0.0'
    },
    {
        icon: '/mnt.svg',
        symbol: 'mETH',
        name: 'mETH',
        balance: '0.0'
    },
    {
        icon: '/mnt.svg',
        symbol: 'wstETH',
        name: 'Wrapped liquid staked Ether 2.0',
        balance: '0.0'
    },
    {
        icon: '/mnt.svg',
        symbol: 'APEX',
        name: 'ApeX Token',
        balance: '0.0'
    },
    {
        icon: '/mnt.svg',
        symbol: 'BabyDoge',
        name: 'Baby Doge Coin',
        balance: '0.0'
    },
    {
        icon: '/mnt.svg',
        symbol: 'CUPS',
        name: 'Custom UPS',
        balance: '0.0'
    },
    {
        icon: '/mnt.svg',
        symbol: 'ePendle',
        name: 'Equilibria Token',
        balance: '0.0'
    },
    {
        icon: '/mnt.svg',
        symbol: 'EQB',
        name: 'Equilibria Token',
        balance: '0.0'
    },
    {
        icon: '/mnt.svg',
        symbol: 'FLOKI',
        name: 'FLOKI',
        balance: '0.0'
    },
    {
        icon: '/mnt.svg',
        symbol: 'IDO',
        name: 'Idexo Token',
        balance: '0.0'
    },
    {
        icon: '/mnt.svg',
        symbol: 'IONX',
        name: 'IONX',
        balance: '0.0'
    },
    {
        icon: '/mnt.svg',
        symbol: 'PENDLE',
        name: 'PENDLE',
        balance: '0.0'
    },
    {
        icon: '/mnt.svg',
        symbol: 'PEPE',
        name: 'Pepe',
        balance: '0.0'
    },
    {
        icon: '/mnt.svg',
        symbol: 'SHIB',
        name: 'SHIBA INU',
        balance: '0.0'
    },
    {
        icon: '/mnt.svg',
        symbol: 'TRB',
        name: 'Tellor Tributes',
        balance: '0.0'
    },
    {
        icon: '/mnt.svg',
        symbol: 'WBTC',
        name: 'Wrapped BTC',
        balance: '0.0'
    },
]

export default function NetworkModal({ network, setNetwork, onClose }) {
    return (
        <div className='bg-black/50 backdrop-blur-[52px] h-screen w-screen z-20 fixed inset-0 p-4 overflow-y-auto'>
            <div className='relative w-[484px] mx-auto rounded-[14px] bg-black py-7 px-5'>
                {/* Close and Search */}
                <div className='mt-2.5 mb-4'>
                    {/* Close Button */}
                    <button
                        className="absolute right-5 top-0 text-5xl"
                        onClick={onClose}
                    >
                        <CloseSVG />
                    </button>
                    <p className="text-[18px] text-[rgb(196,196,196)] my-2.5">
                        Select a token
                    </p>
                    {/* Search */}
                    <div className='relative'>
                        <input
                            type="text"
                            placeholder="Enter name or symbol"
                            className="w-full rounded-[10px] bg-black border border-[rgb(70,70,70)] py-[10.5px] pl-[47px] pr-4 placeholder:text-lg placeholder:text-[rgb(196,196,196)] focus:outline-none focus:ring-0 focus:ring-white/70 appearance-none focus:border-white/70"
                        />
                        <div className='absolute left-4 top-4'>
                            <SearchIconSVG />
                        </div>
                    </div>
                </div>
                {/* Line Break */}
                <LineBreakSVG />

                {/* Networks */}
                <div className='h-96 overflow-y-scroll'>
                    {coins?.map((item, index) => (
                        <button
                            key={index}
                            className='flex justify-between gap-4 items-center w-full pe-5'
                            onClick={() => {
                                setNetwork(item.symbol.toUpperCase())
                                onClose()
                            }}
                        >
                            <img width={32} height={32} src={item.icon} alt={item.name} />
                            <div className='flex-grow my-1.5 text-left font-medium text-[rgb(196,196,196)'>
                                <p class={`text-[18px] ${network.toLowerCase() === item.symbol.toLowerCase() && 'text-[#65B3AE]'}`}>{item.symbol}</p>
                                <p class="text-[12px]">{item.name}</p>
                            </div>
                            <p className='text-[rgb(70,70,70)] font-medium'>{item.balance}</p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
