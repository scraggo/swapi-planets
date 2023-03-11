import { Center, Spinner as CSpinner } from '@chakra-ui/react';

type Props = {
  className?: string;
};

export default function Spinner({ className = 'spinner' }: Props) {
  return (
    <Center className={className}>
      <CSpinner
        thickness="4px"
        speed="0.65s"
        emptyColor="grey"
        color="white"
        size="xl"
      />
    </Center>
  );
}
