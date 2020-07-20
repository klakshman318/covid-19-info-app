import React from 'react';
import Svg, { Path, G } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 48 48" width={props.width} height={props.height} {...props}>
      <Path
        fill="#6A1B9A"
        d="M32.322 9.042a1 1 0 01-1.306.544l-1.85-.762a1.001 1.001 0 01.762-1.85l1.85.762a1 1 0 01.544 1.306z"
      />
      <Path
        fill="#6A1B9A"
        d="M29.548 7.9l1.85.762-1.904 4.624-1.85-.762zM19.377 40.48a1 1 0 00-.545-1.305l-1.849-.762a1 1 0 00-.762 1.85l1.85.762a1.001 1.001 0 001.306-.545z"
      />
      <Path
        fill="#6A1B9A"
        d="M18.504 34.714l1.85.76-1.902 4.625-1.85-.761zM9.042 15.678a1 1 0 01.544 1.306l-.762 1.849a1 1 0 01-1.306.545 1.002 1.002 0 01-.544-1.307l.762-1.849a1.001 1.001 0 011.306-.544z"
      />
      <Path
        fill="#6A1B9A"
        d="M7.9 18.45l.761-1.849 4.624 1.905-.761 1.849zM40.48 28.623a1 1 0 00-1.305.545l-.762 1.849a1.001 1.001 0 001.85.762l.762-1.85a1.001 1.001 0 00-.545-1.306z"
      />
      <Path
        fill="#6A1B9A"
        d="M34.717 29.493l.762-1.848 4.623 1.905-.762 1.848zM7.539 28.691a1 1 0 011.308.538l.769 1.847a1.002 1.002 0 01-.538 1.309 1.002 1.002 0 01-1.308-.539L7 30a1 1 0 01.539-1.309z"
      />
      <Path
        fill="#6A1B9A"
        d="M8.693 31.459l-.768-1.845 4.616-1.922.768 1.845zM38.923 15.615a1 1 0 00-.538 1.307l.77 1.847A1 1 0 0041.002 18l-.771-1.847a1 1 0 00-1.308-.538z"
      />
      <Path
        fill="#6A1B9A"
        d="M35.462 20.308l-.77-1.847 4.614-1.926.77 1.847zM19.309 7.538a1 1 0 01-.538 1.308l-1.847.77a1 1 0 01-.77-1.847L18.001 7a.999.999 0 011.308.538z"
      />
      <Path
        fill="#6A1B9A"
        d="M16.539 8.692l1.846-.77 1.924 4.615-1.846.77zM32.386 38.922a1.002 1.002 0 00-1.308-.538l-1.846.769c-.512.215-.752.8-.54 1.311.213.507.798.749 1.308.536l1.847-.77a1 1 0 00.539-1.308z"
      />
      <Path
        fill="#6A1B9A"
        d="M27.69 35.463l1.848-.772 1.927 4.615-1.847.771z"
      />
      <G fill="#9C27B0">
        <Path d="M26 5a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1z" />
        <Path d="M23 5h2v5h-2zm3 38a1 1 0 00-1-1h-2a1 1 0 100 2h2a1 1 0 001-1z" />
        <Path d="M23 38h2v5h-2zM5 22a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z" />
        <Path d="M5 23h5v2H5zm38-1a1 1 0 00-1 1v2a1 1 0 102 0v-2a1 1 0 00-1-1z" />
        <Path d="M38 23h5v2h-5zM9.15 36.021a1.001 1.001 0 011.415 0l1.414 1.414a1 1 0 010 1.414.998.998 0 01-1.414 0L9.15 37.435a1.002 1.002 0 010-1.414z" />
        <Path d="M11.272 38.142l-1.414-1.414 3.535-3.535 1.414 1.414zM36.021 9.15a1 1 0 000 1.414l1.415 1.414a1 1 0 101.414-1.414L37.436 9.15a1.003 1.003 0 00-1.415 0z" />
        <Path d="M34.603 14.806l-1.414-1.414 3.535-3.537 1.414 1.413zM36.021 38.85a1.001 1.001 0 010-1.415l1.414-1.414a1 1 0 011.414 0 .998.998 0 010 1.414l-1.414 1.415a1.002 1.002 0 01-1.414 0z" />
        <Path d="M38.142 36.728l-1.414 1.414-3.535-3.535 1.414-1.414zM9.15 11.979a1 1 0 001.414 0l1.414-1.415a1 1 0 10-1.414-1.414L9.15 10.564a1.003 1.003 0 000 1.415z" />
        <Path d="M14.806 13.392l-1.413 1.414-3.538-3.535 1.414-1.414z" />
      </G>
      <Path fill="#8BC34A" d="M24 9a15 15 0 100 30 15 15 0 100-30z" />
      <Path
        fill="#689F38"
        d="M24 11c7.168 0 13 5.832 13 13s-5.832 13-13 13-13-5.832-13-13 5.832-13 13-13m0-2C15.716 9 9 15.716 9 24s6.716 15 15 15 15-6.716 15-15S32.284 9 24 9z"
      />
      <Path
        fill="#558B2F"
        d="M20.94 34.523c-.102 0-.205-.016-.308-.049l-.205-.068a1 1 0 01.645-1.893l.175.059a1 1 0 01-.307 1.951zm7.912-.776a1.002 1.002 0 01-.489-1.873l.162-.092a.999.999 0 11.998 1.732l-.184.105a.988.988 0 01-.487.128zm-4.311 1.162a.999.999 0 01.223-1.923l.184-.026a.998.998 0 011.14.837.998.998 0 01-.837 1.139l-.209.032a.99.99 0 01-.501-.059zm-7.207-2.455a1 1 0 01-.665-.253l-.167-.153a.999.999 0 01-.043-1.413.998.998 0 011.414-.044l.127.116a1 1 0 01-.666 1.747zm14.652-1.435a1 1 0 01-.796-1.604l.106-.144a1 1 0 111.617 1.175l-.13.177a.995.995 0 01-.797.396zm-17.108-1.916a1 1 0 01-.912-.589l-.088-.2a1.001 1.001 0 01.526-1.313c.51-.216 1.096.02 1.313.527l.071.163a.998.998 0 01-.91 1.412zm18.868-1.85a1.001 1.001 0 01-.977-1.221l.04-.177a.997.997 0 011.183-.774.998.998 0 01.774 1.183l-.046.212a1 1 0 01-.974.777zM14 25.021c-.552 0-1-.427-1-.979l.002-.262a1 1 0 011.999.044L15 24c0 .552-.448 1.021-1 1.021zm19.818-1.923a.999.999 0 01-.98-.81l-.037-.18a1 1 0 011.957-.413l.043.211a1 1 0 01-.983 1.192zM14.86 20.935a1 1 0 01-.912-1.409l.088-.193a1 1 0 011.815.841l-.078.17a1 1 0 01-.913.591zm17.338-1.664a1 1 0 01-.819-.425l-.106-.148a.999.999 0 111.617-1.177l.126.176a1.001 1.001 0 01-.818 1.574zm-14.892-1.699a1 1 0 01-.67-1.744l.165-.146a1 1 0 011.308 1.514l-.134.118a.996.996 0 01-.669.258zm11.854-1.139a.992.992 0 01-.521-.147l-.148-.088a1 1 0 11.998-1.733l.195.115a1 1 0 01-.524 1.853zm-8.258-.943a1 1 0 01-.31-1.951l.208-.066a1 1 0 01.584 1.914l-.173.054a1.012 1.012 0 01-.309.049zm4.332-.415a.912.912 0 01-.127-.008l-.175-.02a1 1 0 01-.892-1.097.991.991 0 011.097-.892l.222.025a1 1 0 01-.125 1.992zm-2.222 15.844a.905.905 0 01-.163-.014 5.045 5.045 0 01-.24-.044 1 1 0 11.413-1.957l.152.028a1 1 0 01-.162 1.987zm3.855-.647a.998.998 0 01-.877-.519.997.997 0 01.395-1.357l.148-.084a1 1 0 011.012 1.724l-.197.111a.987.987 0 01-.481.125zm-7.423-1.369a.997.997 0 01-.764-.354l-.144-.173a1 1 0 011.561-1.252l.11.134a1 1 0 01-.763 1.645zm10.138-1.7a.998.998 0 01-.93-1.369l.059-.155a1 1 0 111.883.675l-.082.218a1.003 1.003 0 01-.93.631zm-11.583-2.168c-.542 0-.987-.4-.999-.944V24l.004-.236a1.005 1.005 0 011.036-.963 1 1 0 01.963 1.036L19 24c0 .548-.441 1.028-.989 1.034l-.012.001zm11.696-1.928a1 1 0 01-.951-.693l-.051-.142a1 1 0 111.871-.707c.029.077.057.155.082.234a1 1 0 01-.951 1.308zm-10.297-1.958a1 1 0 01-.766-1.642l.154-.178a1 1 0 011.487 1.339l-.106.123a1.004 1.004 0 01-.769.358zm7.752-1.255a.992.992 0 01-.521-.147l-.147-.089a1 1 0 11.998-1.733l.194.115a1 1 0 01-.524 1.854zm-4.208-.801a1 1 0 01-.177-1.984l.236-.038a.999.999 0 11.276 1.98l-.157.025a.901.901 0 01-.178.017z"
      />
    </Svg>
  )
}

export default SvgComponent;
