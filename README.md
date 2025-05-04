# AI Lab Project

## Overview
This research project focuses on developing and evaluating deep learning models for detecting AI-generated images. As synthetic imagery becomes increasingly prevalent in digital media, the ability to distinguish between authentic and AI-generated content has emerged as a critical challenge. Our research explores various transfer learning approaches using pre-trained convolutional neural networks to address this challenge.

## Key Findings
- Achieved 97.13% validation accuracy using EfficientNetV2-B0
- Comprehensive comparison of four model architectures
- Detailed analysis of performance metrics across different model sizes
- Evaluation of computational efficiency vs. detection accuracy

## Model Architectures

### EfficientNetV2-B0
![EfficientNetV2-B0 Architecture](https://github.com/user-attachments/assets/98d2e744-9caf-4708-9b82-c1d1c37bca6f)

- **Accuracy**: 97.13%
- **Precision**: 97.59%
- **Recall**: 96.65%
- **Parameters**: 6.27M
- **Validation Loss**: 0.1145

![image](https://github.com/user-attachments/assets/2e808e2d-65ab-46e3-be32-7c146e6621e4)

]![image](https://github.com/user-attachments/assets/a20aee38-3016-458c-83c2-9438bc562044)


### VGG16
![image](https://github.com/user-attachments/assets/d76ec9b6-9013-441b-b483-431cb4f94852)

- **Accuracy**: 96.16%
- **Precision**: 95.99%
- **Recall**: 96.35%
- **Parameters**: 14.86M
- **Validation Loss**: 0.1427

![image](https://github.com/user-attachments/assets/1623e7a1-4f46-4f6a-8df1-1cfed323afb9)

![image](https://github.com/user-attachments/assets/c2489048-abdd-443b-aaab-f97419b5cc07)


### ResNet50
![image](https://github.com/user-attachments/assets/fbf51569-af5b-49cd-8007-42776f2f0068)

- **Accuracy**: 95.99%
- **Precision**: 94.61%
- **Recall**: 97.55%
- **Parameters**: 24.14M
- **Validation Loss**: 0.1183

![image](https://github.com/user-attachments/assets/df8568d5-719e-4e6f-aaa4-2cb97751b8c7)

![image](https://github.com/user-attachments/assets/7e299e6c-e0b1-46a5-bcf2-49dc1ec32032)


### MobileNetV3Small
![image](https://github.com/user-attachments/assets/2146525a-8710-458f-8846-642cd1b246e4)
- **Accuracy**: 94.69%
- **Precision**: 94.06%
- **Recall**: 95.41%
- **Parameters**: 1.11M
- **Validation Loss**: 0.1570

![image](https://github.com/user-attachments/assets/48b0a22b-fb1d-4b34-9517-de946b7d5656)

![image](https://github.com/user-attachments/assets/d77810cb-e13a-48b2-ba1b-c4c16bff5544)

## Dataset
The research utilized the CIFAKE dataset, consisting of:
- 60,000 total images (30,000 real, 30,000 AI-generated)
- 32x32 pixel resolution
- AI-generated images created using Stable Diffusion v1.5
- Balanced distribution between real and synthetic content

## Methodology
1. **Transfer Learning Approach**
   - Fine-tuned pre-trained CNN architectures
   - Implemented batch normalization layers
   - Added dropout (rate = 0.5) to prevent overfitting
   - Custom dense layers for feature extraction

2. **Training Configuration**
   - Learning Rate: 0.0001
   - Batch Size: 32
   - Epochs: 50
   - Optimizer: Adam
   - Loss Function: Binary Cross-Entropy

3. **Data Augmentation**
   - Random Rotation: ±15°
   - Random Zoom: 0.9 - 1.1
   - Horizontal Flip: Enabled
   - Width/Height Shift: ±10%

## Results Analysis
- EfficientNetV2-B0 emerged as the optimal solution, achieving the highest accuracy while maintaining reasonable computational efficiency
- MobileNetV3Small demonstrated potential for resource-constrained deployments
- All models showed strong performance in detecting AI-generated content
- Detailed performance metrics and visualizations available in the results section

## Implications
- Significant potential for combating misinformation in digital media
- Gap between human perception (51% accuracy) and machine learning capabilities
- Need for both technological solutions and improved digital literacy
- Importance of maintaining trust in visual media

## Future Work
1. Adversarial training techniques for improved robustness
2. Multimodal approaches combining visual features with metadata
3. Lightweight detection models for mobile deployment
4. Longitudinal studies tracking detection performance

## Project Structure
```
├── client/                    # Next.js frontend application
│   ├── app/                   # App router directory
│   │   ├── api/              # API routes
│   │   ├── game/             # Game interface
│   │   ├── leaderboard/      # Leaderboard page
│   │   ├── whitepaper/       # Research documentation
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Main page
│   ├── components/           # Reusable UI components
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions
│   ├── models/               # ML model implementations
│   ├── public/               # Static assets
│   ├── styles/               # Global styles
│   ├── next.config.mjs       # Next.js configuration
│   ├── tailwind.config.ts    # Tailwind CSS configuration
│   └── tsconfig.json         # TypeScript configuration
└── README.md
```

## Getting Started
1. Clone the repository
2. Install dependencies
3. Run the development server
4. Access the whitepaper at `/whitepaper`

## Contributing
We welcome contributions to this research project. Please feel free to submit issues and pull requests.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- CIFAKE dataset contributors
- Stable Diffusion team
- TensorFlow and PyTorch communities
- All contributors to this research project
