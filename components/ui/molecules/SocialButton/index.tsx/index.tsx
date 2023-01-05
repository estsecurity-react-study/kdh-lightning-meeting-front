import tw from 'twin.macro';

import GoogleLogo from '../../../../assets/GoogleIcon.svg';
import Button from '../../../atoms/Button';

const ProviderIconMap = {
  google: <GoogleLogo />,
} as const;

export interface SocialButtonProps {
  provider: keyof typeof ProviderIconMap;
  text: string;
}

const SocialButton = ({ provider, text }: SocialButtonProps) => {
  return (
    <Button
      css={[
        tw`w-full border-none bg-slate-800`,
        tw`flex flex-row items-center justify-center gap-x-4`,
        tw`fill-white/75 text-white/75 hover:(fill-white text-white) focus:(fill-white text-white)`,
      ]}
    >
      {ProviderIconMap[provider]} {text}
    </Button>
  );
};

export default SocialButton;
