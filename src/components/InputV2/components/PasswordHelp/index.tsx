import { useCallback, useMemo } from 'react';
import FlatList from '../../../FlatList';

import { helpPasswordValidation } from '../../utils/password-help-validation';
import styles from './styles.module.scss';

interface PasswordHelpProps {
   text: string;
   onError?: (error: boolean) => void;
   onSuccess?: () => void;
}

function PasswordHelp(props: PasswordHelpProps) {
   const dispatchCallback = useCallback((hasError: boolean) => {
      if(hasError) {
         props?.onError?.(hasError);
      } else {
         props?.onSuccess?.();
      }
   }, [props]);

	const validations = useMemo(() => {
      const text = props.text;
		const isEmptyValue = text.length === 0;

		const array = [
			{
				message: 'Possuir números',
				isValid: helpPasswordValidation('number')(text),
				isEmptyValue,
			},
			{
				message: 'Possuir caractéres especiais',
				isValid: helpPasswordValidation('specialChars')(text),
				isEmptyValue,
			},
			{
				message: 'Possuir letras maiúsculas',
				isValid: helpPasswordValidation('uppercase')(text),
				isEmptyValue,
			},
			{
				message: 'Possuir letras minúsculas',
				isValid: helpPasswordValidation('lowercase')(text),
				isEmptyValue,
			},
			{
				message: 'Possuir pelo menos 6 dígitos',
				isValid: helpPasswordValidation('hasLenght')(text, 6),
				isEmptyValue
			}
		];

		const hasError = array.some(item => !item.isValid);

      if(!isEmptyValue) {
         dispatchCallback(hasError);
      }

		return array;
	}, [props, dispatchCallback]);

   function getValidationStyle(isValid: boolean, isEmptyValue: boolean) {
      const style = [styles.textValidation];

      if(isValid) {
         style.push(styles.correct);
      } else {
         style.push(styles.wrong);
      }

      if(isEmptyValue) {
         style.push(styles.empty);
      }

      return style.join(' ');
   }

   return(
      <div className={styles.helpContainer}>
         <p className={styles.securityText}>
            Para sua segurança, faça sua senha com os devidos requisitos:
         </p>

         <div>
            <FlatList 
               items={validations}
               keyExtractor={item => item.message}
               renderItem={({ item: validation }) => (
                  <p
                     className={getValidationStyle(validation.isValid, validation.isEmptyValue)}
                  >
                     {validation.message}
                  </p>
               )}
            />
         </div>
      </div>
   );
}
export default PasswordHelp;