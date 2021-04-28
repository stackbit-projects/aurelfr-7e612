import React from 'react';
import _ from 'lodash';

export default class Icon extends React.Component {
    render() {
        let icon = _.get(this.props, 'icon', null);
        return (
            <svg className="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            	{(icon === 'arrow-left') ? (
            	<path d="M22 10.75h-15.212l6.988-6.988-1.775-1.763-10 10 10 10 1.763-1.763-6.975-6.988h15.212v-2.5z" />
            	) : ((icon === 'arrow-right') ? (
            	<path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/> // <path d="M12 2l-1.762 1.763 6.975 6.988h-15.212v2.5h15.212l-6.975 6.988 1.763 1.762 10-10z" />
            	) : ((icon === 'close') ? (
            	<path d="M23.962 1.412L22.55 0 11.981 10.57 1.411 0 0 1.412l10.57 10.57L0 22.55l1.412 1.412 10.57-10.57 10.568 10.57 1.412-1.412-10.57-10.569z"/>
            	) : ((icon === 'facebook') ? (
            	<path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"/>
            	) : ((icon === 'github') ? (
            	<path d="M18.5 2c1.309 0 2.5 1.16 2.5 2.434 0 1.358-1.044 3.303-2.5 5.723-1.456-2.42-2.5-4.365-2.5-5.723 0-1.274 1.191-2.434 2.5-2.434zm0-2c-2.361 0-4.5 1.985-4.5 4.434 0 2.45 1.951 5.373 4.5 9.566 2.549-4.193 4.5-7.116 4.5-9.566 0-2.449-2.139-4.434-4.5-4.434zm0 6c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm-7.26 1.237c-.004-.009-.289-.017-.24-.078l.137-.085c.012-.077.072-.162-.008-.304l.047-.125-.1.029s.141-.606.33-.332l-.08.093c.123.122.156.426.195.623.115.06.295.071.088.175.107-.018-.561.286-.648.161-.065-.076.289-.127.279-.157zm-.715-.159c-.078.078.002.128.082.094.113-.05.268-.048.283-.202l.074-.091c.031-.049-.062-.126-.102-.135-.059-.012-.1.064-.137.095l-.066.017-.062.08.008.044-.08.098zm7 9.167l-.734-1.206-.723-1.186c-.73-1.194-1.389-2.276-1.961-3.296l-.07.067c-.377.156-.943-.509-1.34-.531.193.03.018-.49.018-.524-.152-.189-1.123.021-1.377.055-.479.063-.979.057-1.346.355-.258.21-.262.551-.525.716-.17.106-.355.072-.502.209-.258.245-.553.607-.697.929-.061.135.078.458.043.632-.336 1.063.086 2.538 1.375 2.701.312.039.639.209.955.114.252-.076.475-.248.746-.268.377-.025.219.529.736.379.252-.074.365.172.365.359-.084.391-.268.609.088.883.242.188.443.456.486.78.027.182.197.494-.014.602-.15.075-.26.507-.258.649.031.165.365.481.467.621.145.2.039.436.158.663.121.232.236.41.322.645.111.324.959-.007 1.156-.006.674.004 1.014-.944 1.488-1.235.266-.165.191-.616.51-.848.295-.215.607-.344.635-.741.021-.344-.258-1.062-.104-1.353l.103-.165zm-7.302-7.76c.041.172-.119.645-.154.795-.031.138.443.226.416.295.004-.008.641-.22.705-.275l.143-.323c.121-.081.248-.146.385-.196l.164-.285c.055-.021.709-.123.756-.101.164.075.469.389.582.531l.041.032c-.326-.67-.59-1.314-.795-1.942l-.084.036c-.221 0-.527.251-.662.405-.096.104-.67.337-.732.33.33.035.314.276.287.482-.068.476-1.095.035-1.052.216zm10.904 5.049c-.277 4.807-4.252 8.623-9.129 8.623-2.604 0-4.951-1.086-6.619-2.83-.197-.208-.346-.7-.02-.9l.332-.085c.258-.22-.242-1.111-.045-1.254.617-.441.324-.982-.055-1.429-.16-.19-1.043-1.1-1.143-.937.074-.249-.16-.85-.301-1.087-.24-.398-.553-.643-.68-1.081-.047-.174-.047-.703-.151-.826-.041-.05-.359-.185-.348-.257.305-1.82 1.148-3.458 2.365-4.751l.819-.33c.516-.773.545-.173 1.008-.375.154 0 .332-.634.496-.734.289-.185.068-.185.016-.27-.113-.184 2.41-1.103 2.453-.938.033.14-1.25.809-1.109.788-.325.043-.387.627-.327.625.162-.005 1.182-.774 1.656-.61.467.161 1.301-.37 1.627-.64l.042-.039c.029-.761.195-1.494.48-2.172l-.494-.025c-6.074 0-11 4.925-11 11s4.926 11 11 11 11-4.925 11-11c0-.764-.078-1.509-.227-2.229-.49.864-1.043 1.779-1.646 2.763z"/>
            	) : ((icon === 'instagram') ? (
            	<path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z"/>
            	) : ((icon === 'linkedin') ? (
            	<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            	) : ((icon === 'menu') ? (
            	<path d="M19 11v1.92H0V11zm5-8v1.92H0V3zm-2 16v1.92H0V19z"/>
            	) : ((icon === 'twitter') ? (
            	<path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
            	) : ((icon === 'youtube') ? (
            	<path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
            	) : ((icon === 'vimeo') && (
            	<path d="M6.176 1.322l2.844-1.322 4.041 7.89-2.724 1.341c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-7.862 3.591-19.103-18.258-11.385-22.281zm1.929 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.971-.474-2.271-4.383-1.026.5c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.497-2.251-4.398z"/>
              )))))))))))}
            </svg>
        );
    }
}
