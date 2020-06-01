import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor() {}

  getPhotos(): string[] {
    return [
      'https://lh3.googleusercontent.com/hGPMeBVjWCTmclddIJhbmbSjz6HybaihsIFpmV4RM8trn0IQXHHIRO0V4eTYSRT1cEQnlcgkpIp9k7uKQnyewQbdtDQZ7RAeF9rZZ5jENHj7vHY7PeA3q5GpuEP0PDFIHhEwpXfYaw=w1920-h1080',
      'https://lh3.googleusercontent.com/01QT8p9XuCynjXlvRsp-Uqdc1o8cx2CIolgJc1E9qqnKwDsGnPEgVBQI22miZJ3sv0FH0SAfLNusU_EIGgjSxK4GHrKciZEci2SQTv7YKSQUp6Zgur2X6kzMgBUyC18IeoJcCWs-RA=w1920-h1080',
      'https://lh3.googleusercontent.com/sCeO6960pI9d5YoCLZ7nAodIISL_wIVh7HjIhXzV29qnqZ_J5_zUHue-rf9T-8YRkkyz2ns17cl7AOjPxUGOMIIbsKBOLgHP_S1e5qedo9Aw-Xsehvd0vYOiGV1L9H9PU1VyCm8YkQ=w1920-h1080',
      'https://lh3.googleusercontent.com/C-TZwy44Jv2mckVUglZxKbVgnce9pj_wu0OWYg1_9Bx6usYXmK-whu0QT_U2yqcKGqYlPOPUm_DADhtgtzf9IeXumPhOHwp0mb6udQq0vW0PWhphi6OM8U7eZO4bqjwJRV5I9pH1zw=w1920-h1080',
      'https://lh3.googleusercontent.com/1ZDh3AW1WoX5D6YMcPo10gCbH1lnnfz5rMofcKYV96gOGczEswUCZV50E6ymiU_jZC82T4WFB7j4s-P5EtA0NH98Z8axyhgJrgmhEoVYtC4PcE2_r0WiHYZhjWwmmTJZOV4XYzINDw=w1920-h1080',
      'https://lh3.googleusercontent.com/yCM3F-yBv3WbWSLZ9DgKFCNf-MvhTb3zUn1p2WtkjicvZZCpstUE2r8jGMc1M6oEfV3e2MCXsf8VmmR7PFUkYzTK1t_vghIEwEI-IalD5new4z-EEG2jwf4NtF54iJvAsaIA-_CzMQ=w1920-h1080',
      'https://lh3.googleusercontent.com/y_-VeMmEHMVD3s4mNtoERgJSm3uSGqbyonIm7OTidWDBqQpmgb-ALoLdcmOUTR8YFAMI5y4vK98pC0JzRZsRK38_NoYoxH0xhOh6dWCnIWGxtFqpRbdg5Uwh4w5MNFq_uoqrcoh9Ww=w1920-h1080',
      'https://lh3.googleusercontent.com/jLeEf5CvE6RqknX9w3hl_y-7dVkvbQK8WkqRYR9Pd8yGf_nt799ZqQkP2Bup2_2f7HlWQWE4v-zctdyrVUcPIPfrqbyZp-GuTn_xUrklpfHZeSlypNi3Fo5FmCeTw4o5iCLxdX33Aw=w1920-h1080',
      'https://lh3.googleusercontent.com/iUbwRO5u_rm4H6f2gpee5kjV--j5JkWD4L-TPitqp5N1m0bI20SZm0bkn7gnS_QJKgNSN62cyvVrSdSzBlGTS7KZT8ojQxi571vaTZlHN9wwHsg7PNJrpM49gzVJ9-YVUMsiKWoZ4g=w1920-h1080',
      'https://lh3.googleusercontent.com/FLsYeQLqZX2ztalA9NPkz5mGWcXXsv-Clpl4j7rZ8Z_dB9r0ng6v3E2Qw5A8yq_US7sBiV8E8woW2TxRCCMFZOY9EbmHVXfrWzBlRPkECKotrDshwdJT0qvodoH4PFWKDJ_PnEUNFQ=w1920-h1080',
      'https://lh3.googleusercontent.com/UzjZ0Hmzl6DBu6ysBfmCwVOMTlBXt01osFVD5Z6qD0Y0Yr4KzrwpiKx2rZ3R3THwGiEFQuaJdzuHjbsC6GL_Y75gRhDs4wXvLfBULoFSbvxwSq84ffS1s3-jsIq4iJ_GZGQf7m85pA=w1920-h1080',
    ];
  }
}
