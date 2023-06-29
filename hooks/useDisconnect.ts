import { useDisconnect as useWagmiDisconnect, useSignMessage } from 'wagmi'

export const useDisconnect = () => {
    const { disconnect: wagmiDisconnect } = useWagmiDisconnect()
    const {reset} = useSignMessage();

    const disconnect = () => {
        wagmiDisconnect();
        reset();
    }
    
    return {
        ...useWagmiDisconnect,
        disconnect
    }
  
}
