export default interface ButtonProps {
    width?: string | number;
    height?: string | number;
    borderRadius?: number;
    backgroundColor?: string;
    borderColor?: string;
    image?: any;
    text?: string;
    textColor?: string;
    onPress?: () => void;
    type? : 'text-in' | 'text-out'
}
