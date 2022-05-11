from googletrans import Translator

translator = Translator()

sentence = input("번역을 원하는 문장을 입력하세요: ")
dest = input("어떤 언어로 번역을 원하시나요?: ")

# 입력된 문장 감지
detected = translator.detect(sentence)

# 감지된 문장의 언어 추출
language = detected.lang

# translate(문장, 변환의 결과 = dest, 변환의 대상 = src -> optional)
result = translator.translate(sentence, dest)
text = result.text

print(language, ":", sentence)
print(result.dest, ":", text)
