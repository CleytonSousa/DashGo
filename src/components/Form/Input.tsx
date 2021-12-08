import {FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps} from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
    name: string,
    label?: string,
}

export const Input = ({name, label, ...rest}: InputProps) => {
    return(
        <FormControl>
           {!!label &&  <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
              name={name}
              id={name}
              type="email"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              _hover={{
                bgColor: "gray.900",
              }}
              size="lg"
              {...rest}
            />
          </FormControl>
    )
}