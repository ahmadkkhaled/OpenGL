#version 330 core

in vec3 customColor;
in vec2 TexCoord;

out vec4 FragColor;

uniform sampler2D customTexture;

void main()
{
    FragColor = texture(customTexture, TexCoord) * vec4(customColor, 1.0);
}