# 🦷 DentaVision – AI-Powered Dental Disease Detection
Web-app : [dentavision.onrender.com](https://dentalvision.onrender.com/)

For more details refer the below resources:
- Report : [Project Report](/Models/DentalVision.pdf)
- YouTube : [YTVideo](https://www.youtube.com/watch?v=YK43UQPcwUM)

## Disclaimer
- We **do not store or log any uploaded images**. All predictions are processed in-memory and discarded immediately after inference.
- Due to the **limited diversity in training data**, the model may not perform well on edge cases such as unusual angles, poor lighting, or non-standard oral conditions.
- The system currently **treats all uploaded images as valid dental inputs**. It may still produce predictions even on irrelevant or incorrect images.
- This tool is intended for **educational and demonstration purposes only**. It should **not be considered a substitute for professional dental advice, diagnosis, or treatment**.

## Dataset
We used two publicly available datasets from Kaggle:
- [Oral Diseases Dataset](https://www.kaggle.com/datasets/salmansajid05/oral-diseases)
- [Healthy Tooth Dataset](https://www.kaggle.com/datasets/alielhenidy/tooth-dataset)

## Models Implemented
| Model                   | Description                                                                 |
|-------------------------|-----------------------------------------------------------------------------|
| Vanilla CNN             | Basic convolutional neural network (CNN).       |
| CNN with Attention      | Enhanced CNN with spatial attention to focus on diagnostically relevant regions. |
| EfficientNet-B0         | Pretrained model fine-tuned on dental images using compound scaling.        |
| Pretrained ViT (vit_tiny_patch16_224) | Lightweight transformer model fine-tuned on 15K+ images; best-performing model. |

## 📊 Results
Below find the accuracy and loss curves for the pre-trained ViT.  
![Accuracy and Loss curves](/Models/Result_curves.png)

Below plot shows the class wise precision, recall and F1 score for the highest performing model, pre-trained ViT.  
![F1 Score](/Models/Result_F1Score.png)

Below find the accuracy comparison for all the models.

<img src="/Models/Result_comparison.png" alt="Result Comparison" width="50%">
