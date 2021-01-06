import { bedOutline, bookOutline, calculatorOutline, constructOutline, desktopOutline, earthOutline, flaskOutline,  nutritionOutline } from 'ionicons/icons';

const { v4: uuidv4 } = require('uuid');

export const  tawjihiTypeList = [
    {
      id: uuidv4(),
      type: 'علمي',
      icon:flaskOutline

    },
    {
      id:  uuidv4(),
      type: 'تكنولوجي',
      icon:desktopOutline
    },
    {
      id:  uuidv4(),
      type: 'صناعي',
      icon:constructOutline
    },
    
    {
      id:  uuidv4(),
      type: 'أدبي',
      icon:earthOutline
    },
  
    {
      id:  uuidv4(),
      type: 'زراعي',
      icon:nutritionOutline
    },
    {
      id:  uuidv4(),
      type: 'فنادق',
      icon:bedOutline
    },
    {
      id:  uuidv4(),
      type: 'تجاري',
      icon:calculatorOutline
    },
    {
      id:  uuidv4(),
      type: 'شرعي',
      icon:bookOutline
    },
  ];